var appSCP = angular.module("appSCP", []);

appSCP.controller("indexController", function($scope, $http) {



	
	$scope.fornecedores = [];
	$scope.fornecedor = {};

	$scope.carregarFornecedores = function() {
		$http({
			method: 'GET',
			url: '/fornecedor'
		}).then(function successCallback(response) {
			$scope.fornecedores = response.data;
			console.log("Listando todos os fornecedores: ", $scope.fornecedores);
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	}

	$scope.salvarFornecedor = function(fornecedor) {
		$http({
			method: 'POST',
			url: '/fornecedor',
			data: fornecedor
		}).then(function successCallback(response) {			
			console.log("Dados salvos com sucesso.");
			$scope.carregarFornecedores();
			$scope.cancelarEditarfornecedor();
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	}
	
	$scope.excluirFornecedor = function($index) {
		console.log($index);
		console.log($scope.fornecedores[$index]);
		$http({
			method: 'DELETE',
			url: '/fornecedor/'+$scope.fornecedores[$index].id
		}).then(function successCallback(response) {			
			$scope.carregarFornecedores();
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	}
	
	$scope.editarFornecedor = function(f) {
		$scope.fornecedor = angular.copy(f);		
		$http({
			method: 'PUT',
			url: '/fornecedor',
			data: f
		}).then(function successCallback(response) {			
			//console.log("Dados salvos com sucesso.");				
			$scope.carregarFornecedores();		
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	
	}
	
	
	$scope.cancelarEditarFornecedor = function() {
		$scope.fornecedor = {};
		
	}
	
	
	$scope.carregarFornecedores();
	
	
	$scope.produtos = [];
	$scope.produto = {};

	$scope.carregarProdutos = function() {
		$http({
			method: 'GET',
			url: '/produto'
		}).then(function successCallback(response) {
			$scope.produtos = response.data;
			console.log("Listando todos os produtos: ", $scope.produtos);
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	}

	$scope.salvarProduto = function(produto) {
		$http({
			method: 'POST',
			url: '/produto',
			data: produto
		}).then(function successCallback(response) {			
			console.log("Dados salvos com sucesso.");
			$scope.carregarProdutos();
			$scope.cancelarEditarProduto();
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	}
	
	$scope.excluirProduto = function($index) {
		console.log($index);
		console.log($scope.produtos[$index]);
		$http({
			method: 'DELETE',
			url: '/produto/'+$scope.produtos[$index].id
		}).then(function successCallback(response) {	
			$scope.carregarProdutos();
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	}
	
	$scope.editarProduto = function(p) {
		$scope.produto = angular.copy(p);		
		$http({
			method: 'PUT',
			url: '/produto',
			data: p
		}).then(function successCallback(response) {
			$scope.carregarProdutos();			
		}, function errorCallback(response) {
			console.log("ERRO");
			console.log(response.status);
		});
	
	}
	
	
	$scope.cancelarEditarProduto = function() {
		$scope.produto = {};
		
	}
	
	
	$scope.carregarFornecedores();	
	$scope.carregarProdutos();
});
