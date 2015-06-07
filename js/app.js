// js/app.js --> main module with dependency injection

var TestMessageModule = angular.module('TestMessageModule', []);
var ProtoModule = angular.module('ProtoModule', ['TestMessageModule']);


TestMessageModule.controller('MessageController', function() {
	
	var vm = this;
	
	vm.test = 'Hello world!';
	
});
