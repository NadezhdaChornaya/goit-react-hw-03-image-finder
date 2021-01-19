import React, { Component } from 'react'
import { fetchImagessWithQuery } from '../../services/imagesApi';
import { ImageGallery } from './ImageGallery'
import Searchbar from '../searchbar/Searchbar'
import { Button } from './button/Button'
import { Modal } from '../modal/Modal'
import { LoaderGallery } from '../loader/LoaderGallery'


export default class FieldImageGalery extends Component {
    state = {
        images: [],
        loading: false,
        error: null,
        searchQuery: '',
        page: 1,
        largeImageURL: null,
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyEsc);
    }

    componentDidUpdate(prevProps, prevState) {
        const prevPage = prevState.page;
        const currentPage = this.state.page;
        if (prevPage !== currentPage) {
            window.scrollTo({
                top: document.documentElement.offsetHeight,
                behavior: 'smooth'
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyEsc);
    }

    openModal = (e) => {
        this.setState((prevState) => ({ ...prevState, largeImageURL: e.target.dataset.url }))
    }

    handleKeyEsc = e => {
        if (e.code === 'Escape') {
            this.setState((prevState) => ({ ...prevState, largeImageURL: null }));
        }
    };

    handleCloseOverlay = e => {
        if (e.target.nodeName !== 'IMG') {
            this.setState({
                largeImageURL: null,
            });
        }
    };

    handleSearchFormSubmit = (query) => {
        if (query === '') {
            return;
        }
        const { page } = this.state;
        this.setState((prevState) => ({ ...prevState, loading: true }))
        fetchImagessWithQuery(query, page)
            .then(images => this.setState(prevState => ({
                ...prevState, images:
                    [...prevState.images, ...images],
                page: prevState.page + 1,
                searchQuery: query, loading: true
            }))
            )
            .catch(error => this.setState((prevState) => ({ ...prevState, error })))
            .finally(() => this.setState((prevState) => ({ ...prevState, loading: false })))
    }


    handleLoadMoreImages = () => {
        const { page, searchQuery } = this.state;
        this.setState((prevState) => ({ ...prevState, loading: true }))
        fetchImagessWithQuery(searchQuery, page)
            .then(images =>
                this.setState(prevState => ({
                    ...prevState, images:
                        [...prevState.images, ...images],
                    page: prevState.page + 1
                })))
            // .then(response => this.handleScroll())
            .catch(error => this.setState((prevState) => ({ ...prevState, error })))
            .finally(() => this.setState((prevState) => ({ ...prevState, loading: false })))
    }

    handleScroll = () => {
        window.scrollBy({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth'
        })
    }

    render() {
        const { images, loading, largeImageURL } = this.state;
        return (
            <div>
                <Searchbar onSubmit={this.handleSearchFormSubmit} />
                {images.length === 0 && <h1>Please, enter your search</h1>}
                {loading && <LoaderGallery />}
                {images.length > 0 && <ImageGallery images={images} onClick={this.openModal} />}
                {loading && <LoaderGallery />}
                {images.length > 0 && <Button onLoadMore={this.handleLoadMoreImages} />}
                {largeImageURL && <Modal url={largeImageURL} onClick={this.handleCloseOverlay} />}
            </div>
        )
    }
}
