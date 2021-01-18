import React, { Component } from 'react'

export default class SearchForm extends Component {
    state = {
        inputValue: '',
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
        this.props.onSubmit(this.state.inputValue)
        this.setState({ inputValue: '' })
    }

    render() {
        return (
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}
