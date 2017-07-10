mvc.controller("cadastroController", function ($scope, $location, usuariosService) {

$scope.login = "#login"

$scope.cadastro = function(viewmodel) {

	if(viewmodel.senha != viewmodel.senha2) {
		alert("Senhas não conferem");
	} else {

		usuariosService.cadastro(viewmodel).then(sucesso, erro);
	}

}

function sucesso(res) {
	alert("Usuário Cadastrado!");
	$location.path("login");	
}

function erro(res) {
	alert("Erro ao Cadastrar");	
	console.log(res);
}

});