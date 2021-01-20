import React from 'react'
import PropTypes from "prop-types";

export const Modal = ({ url, alt, onClick }) => {
    return (
        <div className="Overlay" onClick={onClick}>
            <div className="Modal">
                <img src={url} alt={alt} />
            </div>
        </div>
    )
}

Modal.propTypes = {
    onClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
}