import React from 'react'

export const ImageGalleryItem = ({ image, onClick }) => {
    return (
        <li className="ImageGalleryItem" key={image.key} onClick={onClick}>
            <img src={image.webformatURL}
                alt={image.tags}
                data-url={image.largeImageURL}
                className="ImageGalleryItem-image" />
        </li>
    )
}
