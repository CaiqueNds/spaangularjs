mvc.service("produtosService", function ($http, wsHOST, $localStorage) {

    this.produtos = function () {
        return $http({
            url: wsHOST.url + "produtos",
            method: "GET",
            headers: {'x-access-token': $localStorage.token} 
        });
    };

});

