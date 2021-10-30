import React, {Component} from 'react';
import cls from './SearchBar.module.css';

export class SearchBar extends Component {
    state = {
        inputText: ''
    }

    handleChange = ({target: {value}}) => {
        this.setState(() => ({inputText: value})) ;
    }

    render() {
        return (
            <div className={cls.SearchBar}>
                <h1>Search user</h1>
                <input type='text'
                    className={cls.SearchInput}
                    onChange={this.handleChange}/>
                <button
                    className={cls.SearchButton}
                    onClick={() => {
                        this.props.whenClick(this.state.inputText)
                    }}>
                        Find user
                </button>
            </div>
        );
    }
}
