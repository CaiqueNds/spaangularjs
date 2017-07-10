mvc.controller("tokenController", function ($scope, $location, usuariosService) {

$scope.login = "#login"

$scope.entrar = function(viewmodel) {

	usuariosService.login(viewmodel).then(sucesso, erro);
	$location.path("home");

}

function sucesso(res) {
	alert("Usuário Cadastrado!");
	$location.path("login");	
}

function erro(res) {
	alert("Erro ao Cadastrar");	
}

});