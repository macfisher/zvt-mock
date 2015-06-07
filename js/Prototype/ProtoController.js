var MessageModule = angular.module('MessageModule', ['MessageService']);

MessageModule.controller('ProtoController', ['MessageService', function(MessageService) {
	
	var vm = this;
	
	vm.message = MessageService;
	
}]);
