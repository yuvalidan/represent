import React from 'react';

const negativeMessages = [
    'You might want to look into that.',
    'That doesn\'t look too good.',
    'You can do better than that!',
    'Not super ideal.',
    'As homogeneous as Fox News',
];
const positiveMessages = [
    'Looks good!',
    'Tumblr would approve.',
    'Nice!',
    'Super woke.',
    'We\'re proud of you.',
    'Good job.',
    'So diverse it could be the cast of Orange is the New Black',
];

function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function getText(per) {
    return per > 60 ? getRandom(negativeMessages) : getRandom(positiveMessages);
}

const SubmissionForm = ({results}) => {
    if (!results || !results.numberOfPeople) {
        return null;
    }
    return (
        <div>
            <h3>Total people identified: {results.numberOfPeople}</h3>
            <div className="results-container">
                <div><div className="percent">{results.percentMen}% men</div>{getText(results.percentMen)}</div>
                <div><div className="percent">{results.percentWhite}% white</div>{getText(results.percentWhite)}</div>
                <div><div className="percent">{results.percentYoung}% young</div>{getText(results.percentYoung)}</div>
            </div>
        </div>
    );
};

export default SubmissionForm;