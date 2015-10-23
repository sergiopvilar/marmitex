## Marmitex

Uma aplicação de exemplo pro Bootcamp do Startup Weekend João Pessoa 2015

### O que vem na caixa

 - Lumen Framework
 - Suporte ao Docker
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
