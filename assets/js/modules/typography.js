define(function () {
	
            
            
            /*
            
            // replace left-side double quotes
            .replace(/(^|\s)"/g, function(str, p1) { return is_eng ? p1 + "“" : p1 + "«"; })
            // replace right-side double quotes
            .replace(/"(\s|[-.,:;?!]|$)/g, function(str, p1) { return is_eng ? "”" + p1 : "»" + p1; })
            // adding single whitespace after comma, colon and semicolon
            .replace(/([,:;])(?=[^ ])/gi, '$1 ')
            // adding a thin whitespaces in initials and reductions
            .replace(/( [a-z?-??]\.)\s?([a-z?-??]\.)/gi, function(str, p1, p2) { return p1 + "\u2009" + p2; })
            // adding whitespace before each sentence in the given text
            .replace(/(\.)(?=[a-z?-??][^.])/gi, '$1 ')
            // adding single whitespace after single ore more question or exclamation marks before the next sentence
            .replace(/([!?])(?=[^!?”» ])/g, '$1 ')
            // inserting real copyright symbol
            .replace(/\([c?]\)/gi, "\u00A9")
            // inserting real trade mark symbol
            .replace(/\(r\)/gi, "\u00AE")
            // capitalize first letter in the text
            .replace(/^([a-z?-??])/, function(str, p1) { return p1.toUpperCase(); })
            // capitalize first letter in the sentence
            .replace(/([.?!])(\s?)([a-z?-??])(?=[a-z?-??])/g, function(str, p1, p2, p3) { return p1 + p2 + p3.toUpperCase(); });
			*/
			
			const TYPO_PATTERNS = {
				whitespaceSequences: [/[ \t]+/g, ' '], // replace unnecessary whitespace sequences with one whitespace
				whitespacesInDots: [/\.\s\.\s\./g, '...'], // remove whitespaces between dots
				onlyThreeDots: [/(\.){4,}/g, '$1$1$1'], // replace sequence of more than three dots with three ones
				whitespacesInMarks: [/(\?|!) (?=\?|!)/g, '$1'], // remove whitespaces between question and exclamation marks
				onlyThreeMarks: [/[!?]{4,}/g, s => s.slice(0, 3)], // replace three or more question or exclamation marks with three ones
				hyphenToDash: [/(\s)-(\s)/g, '$1—$2'], // replace hyphen with a dash
			};
});