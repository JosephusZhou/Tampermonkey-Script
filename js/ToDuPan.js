// ==UserScript==
// @name         To DuPan
// @namespace    https://github.com/JosephusZhou
// @version      0.2
// @description  Automatically redirect to DuPan.
// @author       Josephus Zhou
// @match        https://pan.baidu.com/s/*
// @match        https://pan.baidu.com/share/*
// @grant        none
// ==/UserScript==

(function () {
	'use strict';

	// 1 -> 2
	// https://pan.baidu.com/s/1bt2DcoDPEAZ1qJZ2x2PkFw or https://pan.baidu.com/share/init?surl=bt2DcoDPEAZ1qJZ2x2PkFw
	// https://pan.baiduwp.com/s/1bt2DcoDPEAZ1qJZ2x2PkFw
	let originalUrl = window.location.href
	let jumpUrl
	let reg = /https\:\/\/pan\.baidu\.com\/share\/init\?surl=(.*)/
	if (reg.test(originalUrl)) {
		// 带密码解析后跳转
		var regResult = originalUrl.match(reg)
		jumpUrl = "https://pan.baiduwp.com/s/1" + regResult[1]
	} else {
		// 无密码直接跳转
		jumpUrl = originalUrl.replace("baidu.com", "baiduwp.com")
	}
	window.location.replace(jumpUrl)
})();