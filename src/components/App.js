import React, {Component} from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { UserList } from './UserList/UserList';
import {delay} from '../utils/delay';
import './App.css';


export class App extends Component {
    state = {
        users: null,
        filteredUsers: null
    }

    componentDidMount () {
        delay(2000)
        .then(()=>{
           return fetch('https://reqres.in/api/users?page=2')
        })
        .then((res) => res.json())
        .then(({data}) => this.setState({users: data})) 
    }

    handleClick = (seachName) => {
        const filteredUsersReturn = this.state.users.filter(
            ({first_name, last_name}) => first_name.toLowerCase().includes(seachName) ||
            last_name.toLowerCase().includes(seachName)
        );
        this.setState({filteredUsers: filteredUsersReturn});
    }

    render() {
        return (<div>
            <SearchBar whenClick={this.handleClick}/>
            <UserList users={this.state.users} filteredUsers={this.state.filteredUsers}/>
        </div>)
    }
}





