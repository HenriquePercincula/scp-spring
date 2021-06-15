appSCP.controller("produtoController",function($scope,$http){
	
    $scope.produtos = [];
	$scope.produto = {};
		
	$scope.cancelarEditarProduto = function() {
		$scope.produto = {};
		
	}
	
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
	
	
	
	
	$scope.carregarFornecedores();	
	$scope.carregarProdutos();
        
});