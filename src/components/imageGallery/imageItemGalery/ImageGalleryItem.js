import React from 'react'
import PropTypes from "prop-types";

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onClick }) => {
    return (
        <li className="ImageGalleryItem" onClick={onClick}>
            <img src={webformatURL}
                alt={tags}
                data-url={largeImageURL}
                className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    tags: PropTypes.string,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,

}