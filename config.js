var mvc = angular.module('FCAMARA', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngStorage']);
	mvc.run(function ($rootScope, $location, usuariosService, produtosService, $rootScope) {
	    $rootScope.$on('$routeChangeStart', function (event, next, current) {
	      if (next.authorize) {
	      	usuariosService.access().then(sucesso, erro); 	        	        
	      }
	      function sucesso(res){
	      	
			produtosService.produtos().then(sucess, err);

			function sucess(res){

				$rootScope.produtos = res.data;	

			}

			function err(res){
				// alert("erro ao carregar os produtos");
			}

	      }

	      function erro(res){
	      	alert(res.data.error)

        	$rootScope.$evalAsync(function () {
	          $location.path('/login');
          	})
	      }
	    });
	});

mvc.config(function($routeProvider, $locationProvider) {

	$routeProvider
	.when('/login', {
		templateUrl : 'views/login.html',
		controller  : 'loginController'
	})

	.when('/cadastro', {
		templateUrl : 'views/cadastro.html',
		controller  : 'cadastroController'
	})

	.when('/home', {
		templateUrl : 'views/home.html',
		controller  : 'homeController',
		authorize : true
	})
	
	.otherwise ({ redirectTo: '/login' });	

});

	mvc.constant('wsHOST', {
		url: 'http://localhost:8080/api/'
	});