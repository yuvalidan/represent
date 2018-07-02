import React from 'react';

const Loader = ({ loading }) => {
	if (!loading) {
		return null;
	}
	return (
		<div><div className="loader"></div></div>
	);
};

export default Loader;