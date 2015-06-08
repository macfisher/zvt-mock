var protoApp = angular.module('protoApp', ['deathModule']);

protoApp.controller('protoController', ['deathValue', function(deathValue) {
	
	vm = this;
	
	vm.isDead = deathValue.isDead;
	
}]);
