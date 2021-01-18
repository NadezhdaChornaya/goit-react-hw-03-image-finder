import React, { Component } from 'react'
import axios from 'axios';
import { Searchbar } from './searchbar/Searchbar'
import { ImageGallery } from './imageGallery/ImageGallery'
import { ImageGalleryItem } from './imageGallery/ImageGalleryItem'
import { Loader } from './loader/Loader'
import { Button } from './button/Button'
import { Modal } from './modal/Modal'


export default class App extends Component {
    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}
