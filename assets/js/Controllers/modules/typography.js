define(function () {
	'use strict';
	
	// TODO
	var is_eng = false;
	
	var TYPO_PATTERNS = {
			fixManyWhsps: [/[ \t]+/g, ' '], // replace unnecessary whitespace sequences with one whitespace
			fixWhspsInDots: [/\.\s\.\s\.|(\.){4,}/g, '...'], // remove whitespaces between dots or replace more than three dots with three ones
			fixWhspsInMarks: [/(\?|!) (?=\?|!)/g, '$1'], // remove whitespaces between question and exclamation marks
			fixMore3Marks: [/[!?]{4,}/g, s => s.slice(0, 3)], // replace three or more question or exclamation marks with three ones
			fixHyphenDash0: [/\s-(\s)/g, '\u00A0\u2014$1'], // replace hyphen with a dash with non-breaking space before
			fixHyphenDash1: [/^-(\s)/gm, '\u2014$1'], // replace hyphen with a dash at the beginning of each line
			fixInchMark: [/((?:^|\s)\d+(?:[.,]\d+)?)"/g, '$1\u2033'], // replace machine double quotes with inch/second marks
			fixWhspsAfterMarks0: [/([,:;])(?=[^ ])/gi, '$1 '], // adding single whitespace after comma, colon and semicolon
			fixThinWhsps: [/( [a-zа-яё]\.)\s?([a-zа-яё]\.)/gi, (s, $1, $2) => $1 + '\u2009' + $2], // adding a thin whitespaces in initials and reductions
			fixWhspsBeforeSentences: [/(\.)(?=[a-zа-яё][^.])/gi, '$1 '], // adding whitespace before each sentence in the given text
			fixWhspsAfterMarks1: [/([!?])(?=[^!?”» ])/g, '$1 '], // adding single whitespace after single ore more question or exclamation marks
			fixCopyright: [/\([c?]\)/gi, '\u00A9'], // inserting real copyright symbol
			fixTradeMark: [/\(r\)/gi, '\u00AE'], // inserting real trade mark symbol
			fixTextFirstChar: [/^([a-zа-яё])/, (s, $1) => $1.toUpperCase()], // capitalize first letter in the text
			fixSentenceFirstChar: [/([.?!])(\s?)([a-zа-яё])(?=[a-zа-яё])/g, (s, $1, $2, $3) => $1 + $2 + $3.toUpperCase()], // capitalize sentence first letter
		};
	
	Object.freeze(TYPO_PATTERNS);
	
	function fixText(txt) {
		var re = /"((?:[^\s"][^"]*[^\s"])?)"/,
			replacer;
		
		Object.keys(TYPO_PATTERNS).forEach(function (key) {
			replacer = TYPO_PATTERNS[key];
			txt = txt.replace(replacer[0], replacer[1]);
		});
		
		while (re.test(txt)) {
			txt = txt.replace(re, '«$1»');
		}
		
		return txt;
	}
	
	/**
	 *	@exports
	 */
	 return {
		 fixText: fixText
	 };
});