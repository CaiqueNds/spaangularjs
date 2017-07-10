mvc.service("produtosService", function ($http, wsHOST) {

    this.produtos = function () {
        return $http({
            url: wsHOST.url + "produtos",
            method: "GET",
        });
    };

});

