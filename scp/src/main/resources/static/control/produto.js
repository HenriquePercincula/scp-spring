var produtoModule = angular.module('produtoModule',[]);

produtoModule.controller("produtoControl",function($scope,$http){
	
        urlFornecedor = '/fornecedor';
        urlProduto = '/produto';
	
        $scope.pesquisarFornecedor = function(){
            $http.get(urlFornecedor).then(function (fornecedores){
                $scope.fornecedores = fornecedores;
            }).error(function (erro){
                alert(erro);
            });
        };
        
        $scope.pesquisarProduto = function(){
            $http.get(urlProduto).then(function (produtos){
                $scope.produtos = produtos;
            }).error(function (erro){
                alert(erro);
            });
        };
        
	$scope.selecionaProduto = function(produto){
		$scope.produto = produto;
	};
	
	$scope.salvar = function(){
            if ($scope.produto.codigo === '') {
                $http.post(urlProduto,$scope.produto).success(function (){
                    $scope.produtos.push($scope.produto);
                    $scope.novo();
                }).error(function (erro){
                    alert (erro);
                });
            }else{
                $http.put(urlProduto,$scope.produto).success(function (){
                    $scope.pesquisarProduto();
                    $scope.novo();
                }).error(function (erro){
                    alert (erro);
                });
            }
            
	};
	
	$scope.excluir = function(){
            if ($scope.produto.codigo === '') {
                alert('Selecione um produto');
            } else{
                urlExcluir = urlProduto + "/" + $scope.produto.codigo;
                alert(urlExcluir);
                $http.delete(urlExcluir).success(function (){
                    $scope.pesquisarProduto();
                    $scope.novo();
                }).error(function (erro){
                    console.log(erro);
                });
            }
            
	};
	
	$scope.novo = function(){
		$scope.produto = "";
	};
	
        $scope.pesquisarFornecedor();
        $scope.pesquisarProduto();
        
});