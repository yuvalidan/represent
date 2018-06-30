import React from 'react';

const imagePreview = ({image}) => {
    if (!image) {
        return null;
    }
    return (
        <div className="image-container">
            <img alt="your selection" src={image} />
        </div>
    );
};

export default imagePreview;