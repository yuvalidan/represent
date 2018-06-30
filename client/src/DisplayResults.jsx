import React from 'react';

const SubmissionForm = ({results}) => {
    if (!results || !results.length) {
        return null;
    }
    return (
        <div>
            <h4>Total people identified: {results.length}</h4>
        </div>
    );
};

export default SubmissionForm;