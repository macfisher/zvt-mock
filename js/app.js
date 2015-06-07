// js/app.js --> main module with dependency injection

var zvtDashModule = angular.module('zvtDashModule', []);


zvtDashModule.controller('protoController', function() {
	
	var vm = this;
	
	vm.testMsg = "Hello world!";
	
});
