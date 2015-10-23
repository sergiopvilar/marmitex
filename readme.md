## Marmitex

Uma aplicação de exemplo pro Bootcamp do Startup Weekend João Pessoa 2015

### O que vem na caixa

 - Lumen Framework
 - Suporte ao Docker
 - Suporte ao Heroku
 - Cartalyst Sentinel
 - Roles de Admin e Cliente
 - Middleware de Admin
 
### Rodando

Crie um arquivo de env:

    cp env.sample .env
    
Inicie os containers do Docker:

    docker-compose up -d
    
Rode as migrations e seeds:

    docker-compose run artisan migrate --seed
    
    
### Criando o projeto no Heroku

É necessário usar um buildpack diferente, então para criar o projeto rode:

    heroku create --buildpack https://github.com/heroku/heroku-buildpack-multi

Caso você já tenha o projeto criado:

    heroku config:set BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-multi
