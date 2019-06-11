// ==UserScript==
// @name         Clean V2EX
// @namespace    https://github.com/JosephusZhou
// @version      0.1
// @description  It can give you a clean V2EX.
// @author       Josephus Zhou
// @match        https://www.v2ex.com/t/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.onload = function() {
		// remove the background image and color
		let wrapperDiv = document.getElementById("Wrapper")
		if (wrapperDiv != undefined) {
			wrapperDiv.style.backgroundImage = "url()"
			wrapperDiv.style.backgroundColor = "#999999"
		}
	}
})();