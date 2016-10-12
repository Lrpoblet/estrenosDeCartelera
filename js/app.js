
var carteleraModule = angular.module('carteleraApp',['ngRoute']);

carteleraModule.controller ("subirCtrl", Ctrl.subirCtrl);

carteleraModule.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when("/",{
		templateUrl: "vistas/lista.html",
		controller: Ctrl.listaCtrl
	}).
	when("/page/:page",{
		templateUrl: "vistas/lista.html",
		controller: Ctrl.pageCtrl
	}).
	otherwise({
		redirectTo: "/"
	});
}]);