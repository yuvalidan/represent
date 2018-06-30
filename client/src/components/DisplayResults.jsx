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
    'Tumblr would approve',
    'Nice!',
    'Super woke.',
    'We\'re proud of you.',
    'Good job.',
    'So diverse it could be the cast of Orange is the New Black',
];

function getRandom(arr) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function percentageAndText(per) {
    const text = per > 60 ? getRandom(negativeMessages) : getRandom(positiveMessages);
    return `${per}%. ${text}`;
}

const SubmissionForm = ({results}) => {
    if (!results || !results.numberOfPeople) {
        return null;
    }
    return (
        <div>
            <h4>Total people identified: {results.numberOfPeople}</h4>
            <h4>Men: {percentageAndText(results.percentMen)}</h4>
            <h4>White: {percentageAndText(results.percentWhite)}</h4>
            <h4>Young: {percentageAndText(results.percentYoung)}</h4>
        </div>
    );
};

export default SubmissionForm;