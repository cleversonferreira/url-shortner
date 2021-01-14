**Como rodar o código no ambiente de desenvolvimento**

- Renomeie o arquivo .env.example para .env
- Usando o  (https://cloud.mongodb.com/) crie um clouster e adicione a linha de conexão no arquivo .env em DB_URL
- No terminal rode o comando : npm run dev
- Importe em seu Postman a collection na raiz do projeto (URL Shortener.postman_collection.json)
- Envie um POST, passando o parâmetro url no body, no formato JSON para a url (http://localhost:8081/)

**Como testar em ambiente de produção**

- Envie um POST, passando o parâmetro url no body, no formato JSON para a url (https://url-shortener-br.herokuapp.com/)
- Para testar basta acessar a URL retornada, e você será redirecionado.