import React, { useState } from 'react'

export const Searchbar = ({ onSubmit }) => {
    const [inputValue, setState] = useState('')

    const handleChange = e => {
        const { value } = e.target;
        console.log(value)
        setState(value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputValue)
        onSubmit(inputValue)
    }

    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}

// ========================= class content ======================================
// export class Searchbar extends Component {
//     state = {
//         inputValue: '',
//     }
//     handleChange = e => {
//         const { value } = e.target;
//         this.setState({ inputValue: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state.inputValue)
//         this.setState({ inputValue: '' });
//     }

//     render() {
//         const { inputValue } = this.state;
//         return (
//             <header className="Searchbar">
//                 <form className="SearchForm" onSubmit={this.handleSubmit}>
//                     <button type="submit" className="SearchForm-button">
//                         <span className="SearchForm-button-label">Search</span>
//                     </button>

//                     <input
//                         className="SearchForm-input"
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         value={inputValue}
//                         onChange={this.handleChange}
//                     />
//                 </form>
//             </header>
//         )
//     }
// }
