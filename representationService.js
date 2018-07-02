'use strict'

function calculateMatch(arr, filterFunc) {
	const length = arr.length;
	const matchingLength = arr.filter(filterFunc).length;
	return Math.round((matchingLength / length) * 100);
}

function isWhite(person) {
	return person.data.face.multicultural_appearance.concepts[0].name === 'white';
}

function isMan(person) {
	return person.data.face.gender_appearance.concepts[0].name === 'masculine';
}

function isYoung(person) {
	const age = person.data.face.age_appearance.concepts[0].name;
	return Number(age) < 40;
}

function calculateRepresentations(data) {
	const percentYoung = calculateMatch(data, isYoung);
	const percentMen = calculateMatch(data, isMan);
	const percentWhite = calculateMatch(data, isWhite);
	const numberOfPeople = data.length;
	return { percentYoung, percentMen, percentWhite, numberOfPeople };
}

module.exports = {
	calculateRepresentations,
}