import React from 'react'
import { ImageGalleryItem } from './imageItemGalery/ImageGalleryItem'
import PropTypes from "prop-types";

export const ImageGallery = ({ images, onClick }) => {
    return (
        <ul className="ImageGallery">
            {images.map((image) => {
                return <ImageGalleryItem
                    key={image.id}
                    largeImageURL={image.largeImageURL}
                    tag={image.tag}
                    onClick={onClick}
                    webformatURL={image.webformatURL}
                />
            })}
        </ul>
    )
}
ImageGallery.propTypes = {
    onClick: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}