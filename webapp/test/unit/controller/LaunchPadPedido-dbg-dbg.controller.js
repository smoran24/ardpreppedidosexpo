/*global QUnit*/

sap.ui.define([
	"AR_DP_REP_PEDIDO/AR_DP_REP_PEDIDO/controller/LaunchPadPedido.controller"
], function (Controller) {
	"use strict";

	QUnit.module("LaunchPadPedido Controller");

	QUnit.test("I should test the LaunchPadPedido controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});