// js/app.js --> main module with dependency injection

var MessageModule = angular.module('MessageModule', ['MessageService']);
var ProtoModule = angular.module('ProtoModule', ['MessageModule']);
