define(function () {
	'use strict';
	
	function(e) {
		var t, n, r;
		return typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined' ?
			(t = document.createRange(), t.selectNodeContents(e), n = window.getSelection(), n.removeAllRanges(), n.addRange(t), !0) :
			typeof document.selection !== 'undefined' && typeof document.body.createTextRange !== 'undefined' ?
			(r = document.body.createTextRange(), r.moveToElementText(e), r.select(), !0) : !1;
	}
	
	
});