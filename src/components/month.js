import React, {useState} from 'react';
import '../App.scss'


const joinClassNames= (...classNames) => {
    return classNames.join(' ');
};


export const Month = (props) => {

    const [hoverState, updateHoverState] = useState({isHovered: false});

    const handleOnHoverState = () => {
        updateHoverState({isHovered: true});
    };

    const handleOffHoverState = () => {
        updateHoverState({isHovered: false});
    };

    let highlightColor;
    if (props.count < 2){
        highlightColor = 'gray'
    }
    if (props.count > 1 && props.count <7){
        highlightColor = 'blue'
    }
    if (6 < props.count && props.count < 11){
        highlightColor = 'green'
    }
    if (props.count > 10){
        highlightColor = 'red'
    }

    const classNames = joinClassNames('month', highlightColor);
    return (
        <div>
            <p className={classNames}
               onMouseEnter={() => {handleOnHoverState()}}
               onMouseOut={() => {handleOffHoverState()}}>
                {props.monthName}
            </p>
            {hoverState.isHovered &&
            <div className={'users-list'}>
                {props.userList.map((item) => {
                    return (
                        <p>
                            {`${item.firstName} ${item.lastName}`}
                        </p>
                    )
                })
                }
            </div>}
        </div>
    )
};
