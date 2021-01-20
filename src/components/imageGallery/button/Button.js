import React from 'react'
import { ButtonLoad } from './styledButton'
import PropTypes from "prop-types";


export const Button = ({ onLoadMore }) => {
    return (
        <ButtonLoad type="button" className="Load-button" onClick={onLoadMore}>
            <span className="Load-button-label">Load more</span>
        </ButtonLoad>
    )
}
Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}