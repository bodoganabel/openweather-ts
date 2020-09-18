import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./loading-indicator.styles.scss";



const LoadingIndicator = () => {

    return (
        <div className='loading-indicator'><CircularProgress /></div>
    );
};

export default LoadingIndicator;

