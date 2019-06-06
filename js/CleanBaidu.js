// ==UserScript==
// @name         Clean Baidu
// @namespace    https://github.com/JosephusZhou
// @version      0.1
// @description  It can give you a clean Baidu.
// @author       Josephus Zhou
// @match        https://*.baidu.com*
// @match        https://*.baidu.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.onload = function() {
		let rightContent = document.getElementById("content_right")
		if (rightContent != undefined) {
			rightContent.style.display = "none"
		}
	}
})();