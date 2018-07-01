import React from 'react';

const Explainer = ({show}) => {
    if (!show) {
        return null;
    }
    return (
        <div className="margin2em">
            <h3>Upload your panel photo or flyer to see your diversity percentages</h3>
            <p className="no-margin">Unfortunately results are based solely on appearance</p>
            <p className="no-margin"> so they cannot account for gender non-conforming appearing individuals</p>
        </div>
    );
};

export default Explainer;