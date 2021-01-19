import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = {
        inputValue: '',
    }
    handleChange = e => {
        const { value } = e.target;
        this.setState({ inputValue: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue)
        this.setState({ inputValue: '' });
    }

    render() {
        const { inputValue } = this.state;
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
}
