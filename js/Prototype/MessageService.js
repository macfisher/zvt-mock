var MessageModule = angular.module('MessageModule', []);

MessageModule.factory('MessageService', function() {
	
	var message = "Hello world, from MessageService!!!";
	return message;
	
});
