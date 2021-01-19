import React from 'react'

export const Modal = ({ url, onClick }) => {
    return (
        <div className="Overlay" onClick={onClick}>
            <div className="Modal">
                <img src={url} alt="" />
            </div>
        </div>
    )
}
