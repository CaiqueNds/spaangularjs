# SPA FCAMERA CAIQUE #


### Teste para Developer FCAMERA ###

Nessa aplicação eu consumo a minha api para fazer os testes de login com jwt e listagem dos produtos se o token não estiver expirado.

### Como eu configurei?###

Eu hospedei a aplicação pelo iis do meu servidor local

Tive que instalar o plugin CORS no navegador porque tive problemas com domínio cruzado, pois minha api ficou hospedada local

### Como funciona a aplicação? ###

Com a aplicação hospedada a primeira tela que é redirecionada é a de login.
Porém antes deve ser feito um cadastro

Após o cadastro realizado o usuário é redirecionado para tela de login onde é validado e gerado o token jwt. 

Com o token validado o usuário é enviado para a home onde são listado os produtos

Após 1 minuto se o usuário tentar o refresh da página o mesmo será redirecionado para o login, pois seu token estará expirado.

Deverá fazer o login novamente para gerar um novo token válido


### Observação ###

Se a api for hospedada em outro local que não seja localhost... De ser alterado no arquivo config.js a constante que possui a url para a chamada dos serviços

mvc.constant('wsHOST', {
	url: 'http://localhost:8080/api/'
});