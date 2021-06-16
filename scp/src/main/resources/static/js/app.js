var appSCP = angular.module("appSCP", ['ngRoute']);

appSCP.config(["$routeProvider", function($routeProvider) {

	$routeProvider.when("/", {
		templateUrl : 'view/main.html'
	})
	.when('/produto-view', {
		templateUrl : 'view/produto-view.html',
		controller : 'produtoController'
	})
	.when('/fornecedor-view', {
		templateUrl : 'view/fornecedor-view.html',
		controller : 'fornecedorController'	
	})
	.when('/login', {
		templateUrl : 'view/login.html',
		controller : 'loginController'	
	})
	.otherwise('/');

}]);
  
appSCP.config (function($httpProvider){
	$httpProvider.interceptors.push("tokenInterceptor");
});