import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { WrapperLoader } from './styledLoader'

export const LoaderGallery = () => {
    return (
        <WrapperLoader>
            <Loader
                type="ThreeDots"
                color="#3f51b5"
                height={100}
                width={100}
                timeout={3000} //3 secs
            />
        </WrapperLoader>
    )
}
