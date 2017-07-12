mvc.controller("homeController", function ($scope, produtosService) {

produtosService.produtos().then(sucesso, erro);

function sucesso(res){

	$scope.produtos = res.data;	

}

function erro(res){
	alert("erro ao carregar os produtos");
}

});