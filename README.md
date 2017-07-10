# SPA FCAMERA CAIQUE #


### Teste para Developer FCAMERA ###

Nessa aplicação eu consumo a minha api para fazer os testes de login com jwt e listagem dos produtosse o token não estiver expirado.

### Como eu configurei?###

Eu hospedei a aplicação pelo iis do meu servidor local

Tive que instalar o plugin CORS no navegador porque tive problemas com domínio cruzado, pois minha api ficou hospedada local

### Como funciona ###

Com a aplicação hospedada a primeira tela que é redirecionada é para de login.
Porém antes deve ser feito um cadastro

Após o cadastro realizado o usuário é redirecionado para tela de login onde é validado e gerado o token jwt para acesso a home onde é listado os produtos

Após 1 minuto se o usuário tentar o refresh da página o mesmo será redirecionado para o login, pois seu token estará expirado.

Deverá fazer o login novamente apra gerar umnjovo token válido