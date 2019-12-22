import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Month} from "./month";

export const MonthsPage = () => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September',
        'October', 'November', 'December'];

    const [monthsList, updateMonthsList] = useState([]);

    useEffect(() => {
        getUsersList()
    }, []);

    const getUsersList = () => {
        axios.get('https://yschool.getsandbox.com/users')
            .then(result => {
                updateMonthsList(result.data);
            })
            .catch(e => (console.log(e)));
    };

    return(
        <div>
            {months.map((item) => {
                return (
                    <div>
                        <Month
                            monthName={item}
                            count={monthsList.filter(element =>
                                new Date(element.dob).getMonth() === months.indexOf(item)).length}
                            userList={monthsList.filter(element =>
                                new Date(element.dob).getMonth() === months.indexOf(item))}
                        />
                    </div>
                )
            })}
        </div>
    )
};
