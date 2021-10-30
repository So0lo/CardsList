import React, {Component} from 'react';
import {User} from '../User/User';
import cls from './UserList.module.css';
import loaderSrc from '../../images/loader.gif';



export class UserList extends Component {
    render () {
        const users = this.props.filteredUsers || this.props.users;
        return (
            users ?
            <ul className={cls.UserList}>
                {users.map(({id, ...otherProps}) => (
                    <User key={id} {...otherProps}/>
                ))}
            </ul>
            : <img src={loaderSrc}/>
        )
    }
}