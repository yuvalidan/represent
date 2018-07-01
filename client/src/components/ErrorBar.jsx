import React from 'react';

const ErrorBar = ({errorMsg}) => {
    if (!errorMsg) {
        return null;
    }
    return (
        <div className="error-container">
            Error occured: {errorMsg}
        </div>
    );
};

export default ErrorBar;