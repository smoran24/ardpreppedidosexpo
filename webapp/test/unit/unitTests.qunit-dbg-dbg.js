/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"AR_DP_REP_PEDIDO/AR_DP_REP_PEDIDO/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});