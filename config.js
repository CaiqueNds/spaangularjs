var mvc = angular.module('FCAMARA', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngStorage']);
	mvc.run(function ($rootScope, $location, usuariosService) {
	    $rootScope.$on('$routeChangeStart', function (event, next, current) {
	      if (next.authorize) {
	      	usuariosService.access().then(sucesso, erro); 	        	        
	      }
	      function sucesso(res){
	      	

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