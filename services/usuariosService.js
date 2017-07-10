mvc.service("usuariosService", function ($http, wsHOST, $localStorage) {

    this.cadastro = function (user) {
        return $http({
            url: wsHOST.url + "usuarios",
            method: "POST",
            data: {
                username : user.username,
                password : user.senha
            },
        });
    };

    this.login = function (user) {
        return $http({
            url: wsHOST.url + "login",
            method: "POST",
            data: {
                username : user.username,
                password : user.senha
            },
        });
    };

    this.access = function (user) {
        return $http({
            url: wsHOST.url + "usuarios",
            method: "GET",
            headers: {'x-access-token': $localStorage.token} 
        });
    };

    this.setToken = function (token) {
        $localStorage.token = token;
    };

    this.getToken = function () {
        return $localStorage.token;
    };

});

