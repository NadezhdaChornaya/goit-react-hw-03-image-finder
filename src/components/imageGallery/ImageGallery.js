import React from 'react'
import { ImageGalleryItem } from './imageItemGalery/ImageGalleryItem'

export const ImageGallery = ({ images, onClick }) => {
    return (
        <ul className="ImageGallery">
            {images.map((image) => {
                return <ImageGalleryItem
                    key={image.key}
                    image={image}
                    onClick={onClick}
                />
            })}
        </ul>
    )
}
