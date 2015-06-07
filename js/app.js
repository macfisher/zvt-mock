var protoApp = angular.module('protoApp', []);

protoApp.controller('protoController', ['messageService', function(messageService) {
	
	vm = this;
	
	vm.message = messageService.message;
	//console.log(vm.message);
	
}]);


protoApp.service('messageService', function() {
	
	this.message = function() {
		var output = "TESTING METHOD!!!";
		console.log(output);
	}
	
	return this.message();
	
});
