
var carteleraModule = angular.module('carteleraApp',['ngRoute']);

carteleraModule.controller ("subirCtrl", Ctrl.subirCtrl);

carteleraModule.directive ("barraNavegacion", function(){
	return {
		restrict: "E",
		templateUrl: "vistas/barraNavegacion.html"
	};
});

carteleraModule.controller ("buscarCtrl", Ctrl.buscarCtrl);

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
	when("/proximamente",{
		templateUrl: "vistas/proximamente.html",
		controller: Ctrl.proximosCtrl
	}).
	when("/proxpage/:page",{
		templateUrl: "vistas/proximamente.html",
		controller: Ctrl.pageProxCtrl
	}).
	when("/title/:title",{
		templateUrl: "vistas/title.html",
		controller: Ctrl.titleCtrl
	}).
	when("/buscador/:titulo",{
		templateUrl: "vistas/listaBusca.html",
		controller: Ctrl.buscarPeliCtrl
	}).
	when("/bpage/:titulo/:id",{
		templateUrl: "vistas/listaBusca.html",
		controller: Ctrl.bpageCtrl
	}).
	otherwise({
		redirectTo: "/"
	});
}]);