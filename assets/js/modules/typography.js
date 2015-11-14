define(function () {
	'use strict';
	
	const TYPO_PATTERNS = {
		fixManyWhsps: [/[ \t]+/g, ' '], // replace unnecessary whitespace sequences with one whitespace
		fixWhspsInDots: [/\.\s\.\s\./g, '...'], // remove whitespaces between dots
		fixMore3Dots: [/(\.){4,}/g, '$1$1$1'], // replace sequence of more than three dots with three ones
		fixWhspsInMarks: [/(\?|!) (?=\?|!)/g, '$1'], // remove whitespaces between question and exclamation marks
		fixMore3Marks: [/[!?]{4,}/g, s => s.slice(0, 3)], // replace three or more question or exclamation marks with three ones
		fixHyphenDash: [/(\s)-(\s)/g, '$1—$2'], // replace hyphen with a dash
		fixLeftQuotes: [/(^|\s)"/g, (s, $1) => $1 + (is_eng ? '“' : '«')], // replace left-side double quotes
		fixRightQuotes: [/"(\s|[-.,:;?!]|$)/g, (s, $1) => $1 + (is_eng ? '”' : '»')], // replace right-side double quotes
		fixWhspsAfterMarks0: [/([,:;])(?=[^ ])/gi, '$1 '], // adding single whitespace after comma, colon and semicolon
		fixThinWhsps: [/( [a-z?-??]\.)\s?([a-z?-??]\.)/gi, (s, $1, $2) => $1 + '\u2009' + $2], // adding a thin whitespaces in initials and reductions
		fixWhspsBeforeSentences: [/(\.)(?=[a-z?-??][^.])/gi, '$1 '], // adding whitespace before each sentence in the given text
		fixWhspsAfterMarks1: [/([!?])(?=[^!?”» ])/g, '$1 '], // adding single whitespace after single ore more question or exclamation marks
		fixCopyright: [/\([c?]\)/gi, '\u00A9'], // inserting real copyright symbol
		fixTradeMark: [/\(r\)/gi, '\u00AE'], // inserting real trade mark symbol
		fixTextFirstChar: [/^([a-z?-??])/, (s, $1) => $1.toUpperCase()], // capitalize first letter in the text
		fixSentenceFirstChar: [/([.?!])(\s?)([a-z?-??])(?=[a-z?-??])/g, (s, $1, $2, $3) => $1 + $2 + $3.toUpperCase()], // capitalize sentence first letter
	};
	
	Object.freeze(TYPO_PATTERNS);
});