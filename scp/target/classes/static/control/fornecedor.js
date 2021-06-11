var fornecedorModule = angular.module('fornecedorModule',[]);

fornecedorModule.controller("fornecedorControl",function($scope,$http){
	
        urlFornecedor = '/fornecedor';
        urlProduto = '/produto';
	
        $scope.pesquisarFornecedor = function(){
            $http.get(urlFornecedor).success(function (fornecedores){
                $scope.fornecedores = fornecedores;
            }).error(function (erro){
                alert(erro);
            });
        };
        
        $scope.pesquisarProduto = function(){
            $http.get(urlProduto).success(function (produtos){
                $scope.produtos = produtos;
            }).error(function (erro){
                alert(erro);
            });
        };
        
	$scope.selecionaFornecedor = function(fornecedor){
		$scope.fornecedor = fornecedor;
	};
	
	$scope.salvar = function(){
            if ($scope.fornecedor.codigo === '') {
                $http.post(urlFornecedor,$scope.fornecedor).success(function (){
                    $scope.fornecedores.push($scope.fornecedor);
                    $scope.novo();
                }).error(function (erro){
                    alert (erro);
                });
            }else{
                $http.put(urlFornecedor,$scope.fornecedor).success(function (){
                    $scope.pesquisarFornecedor();
                    $scope.novo();
                }).error(function (erro){
                    alert (erro);
                });
            }
            
	};
	
	$scope.excluir = function(){
            if ($scope.fornecedor.codigo === '') {
                alert('Selecione um fornecedor');
            } else{
                urlExcluir = urlFornecedor + "/" + $scope.fornecedor.codigo;
                alert(urlExcluir);
                $http.delete(urlExcluir).success(function (){
                    $scope.pesquisarFornecedor();
                    $scope.novo();
                }).error(function (erro){
                    alert(erro);
                });
            }
            
	};
	
	$scope.novo = function(){
		$scope.fornecedor = "";
	};
	
        $scope.pesquisarFornecedor();
        $scope.pesquisarProduto();
        
});