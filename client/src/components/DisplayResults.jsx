import React from 'react';

const SubmissionForm = ({results}) => {
    if (!results || !results.numberOfPeople) {
        return null;
    }
    return (
        <div>
            <h4>Total people identified: {results.numberOfPeople}</h4>
            <h4>Men: {results.percentMen}%</h4>
            <h4>White: {results.percentWhite}%</h4>
            <h4>Young: {results.percentYoung}%</h4>
        </div>
    );
};

export default SubmissionForm;