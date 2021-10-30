import React from 'react';
import cls from './User.module.css';


export const User = ({first_name, last_name, avatar}) => {
    return (
        <li className={cls.User}>
            <div>
                <img src={avatar}/>
            </div>
            <div>{`${first_name} ${last_name}`}</div>
        </li>
    );
};

