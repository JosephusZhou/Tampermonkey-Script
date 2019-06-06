// ==UserScript==
// @name         To DuPan
// @namespace    https://github.com/JosephusZhou
// @version      0.1
// @description  Automatically redirect to DuPan.
// @author       Josephus Zhou
// @match        https://pan.baidu.com/s/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// 1 -> 2
	// https://pan.baidu.com/s/1bt2DcoDPEAZ1qJZ2x2PkFw
	// https://pan.baiduwp.com/s/1bt2DcoDPEAZ1qJZ2x2PkFw
	let originalUrl = window.location.href
	let jumpUrl = originalUrl.replace("baidu.com", "baiduwp.com")
	window.location.replace(jumpUrl)
})();