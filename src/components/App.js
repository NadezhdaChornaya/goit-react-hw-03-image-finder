import React, { Component } from 'react'
import axios from 'axios';
import imagesApi from '../services/imagesApi';

import { SearchForm } from './searchForm'
import { Searchbar } from './searchbar/Searchbar'
import { ImageGallery } from './imageGallery/ImageGallery'
import { ImageGalleryItem } from './imageGallery/ImageGalleryItem'
import { Loader } from './loader/Loader'
import { Button } from './button/Button'
import { Modal } from './modal/Modal'


export default class App extends Component {
    state = {
        images: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 0,
        largeImageURL: null,
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.fetchImages('react')


    }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = prevState.searchQuery
        const nextQuery = this.state.searchQuery
        if (prevQuery !== nextQuery) {
            this.fetchImages()
            // axios
            //     .get('')
            //     .then()
            //     .catch(error => this.setState({ error }))
            //     .finally(() => this.setState({ loading: false }))
        }

    }

    setLargeImage = (url) => {
        this.setState({ largeImageURL: url })
    }

    fetchImages = () => {
        const { searchQuery, page } = this.state;
        this.setState({ loading: true })
        imagesApi.fetchImagessWithQuery(this.state.searchQuery)
            .then(images => this.setState(prevState = > ({
                images:
                    [...prevState.images, ...images],
                page: prevState.page + 1
            })))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }))
    }

    handleSearchFormSubmit = (query) => {
        this.setState({ searchQuery: query, page: 0, images: [] })
    }

    render() {
        const { images, loading, error, largeImageURL } = this.state;
        return (
            <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={this.handleSearchFormSubmit}>
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
                {images.length > 0 && !loading && (
                    <button type="button" onClick={this.fetchImages}>Load more...</button>
                )}
                {largeImageURL && (
                    <Modal></Modal>
                )}
            </>
        )
    }
}
