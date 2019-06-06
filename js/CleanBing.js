// ==UserScript==
// @name         Clean Bing
// @namespace    https://github.com/JosephusZhou
// @version      0.1
// @description  It can give you a clean Bing.
// @author       Josephus Zhou
// @match        https://*.bing.com*
// @match        https://*.bing.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.onload = function() {
		// remove the background of main page
		let bgDiv = document.getElementById("bgDiv")
		if (bgDiv != undefined) {
			bgDiv.style.backgroundImage = "url()"
		}

		// remove the content of the right side when searching
		let bContext = document.getElementById("b_context")
		if (bContext != undefined) {
			bContext.style.display = "none"
		}
	}
})();