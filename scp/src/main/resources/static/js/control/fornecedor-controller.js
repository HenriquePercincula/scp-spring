appSCP.controller("fornecedorController",function($scope,$http){
	
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
        
});