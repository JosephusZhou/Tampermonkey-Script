// ==UserScript==
// @name         No Baidu
// @namespace    https://github.com/JosephusZhou
// @version      0.1
// @description  If you visit baidu, it will automatically redirect to Bing.
// @author       Josephus Zhou
// @match        https://*.baidu.com*
// @match        https://*.baidu.com/s?wd=*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.onload = function() {
		let jumpUrl = "https://cn.bing.com/"

		if (window.location.href.indexOf("s?wd=") > 0) {
			let keyWord = document.getElementById("kw").value
			jumpUrl = "https://cn.bing.com/search?q=" + keyWord
		}

		window.location.replace(jumpUrl)
	}
})();