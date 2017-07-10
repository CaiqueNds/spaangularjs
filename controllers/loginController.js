mvc.controller("loginController", function ($scope, $location, usuariosService) {

$scope.cadastro = "#cadastro"

$scope.login = function(viewmodel) {

	usuariosService.login(viewmodel).then(sucesso, erro);

}

function sucesso(res) {
	alert("Esse é seu token: " + res.data.token);
	usuariosService.setToken(res.data.token);
	$location.path('home');
}

function erro(res) {
	alert("Erro ao fazer login");	
}	

});