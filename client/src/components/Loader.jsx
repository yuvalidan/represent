import React from 'react';

const Loader = ({ loading }) => {
	if (!loading) {
		return null;
	}
	return (
		<div className="loader"></div>
	);
};

export default Loader;