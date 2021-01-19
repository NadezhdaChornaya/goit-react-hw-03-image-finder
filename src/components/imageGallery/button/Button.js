import React from 'react'
import { ButtonLoad } from './styledButton'


export const Button = ({ onLoadMore }) => {
    return (
        <ButtonLoad type="button" className="Load-button" onClick={onLoadMore}>
            <span className="Load-button-label">Load more</span>
        </ButtonLoad>
    )
}
