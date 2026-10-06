# API test automation with Jest and PactumJS

> Simple integration between JestJS and PactumJS.

## GitHub Actions

[![Node.js CI](https://github.com/ugioni/integration-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/integration-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_integration-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_integration-tests-jest)

# Getting Started

### Pactum docs:
 - [PactumJS](https://pactumjs.github.io/)

### Prerequisites:
 - NodeJS `v22`

### How to run?

Inside of the project folder run:

 1. `npm install --save-dev`
 1. `npm run ci`

After that you should see a `./output` folder with some `HTML` reports.

### Docs to Api under tests: 
 - [Dummyjson](https://dummyjson.com/docs)
 - [Gorest](https://gorest.co.in/)
 - [Toolshop API](https://api.practicesoftwaretesting.com/api/documentation)
 - [Deck of Cards](https://deckofcardsapi.com/)
 - [JSON placeholder](https://jsonplaceholder.typicode.com/)
 - [http bin](http://httpbin.org/)
 - [rick and morty api](https://rickandmortyapi.com/documentation/#rest)
 - [Petstore](https://petstore.swagger.io/#/) 
 - [ServeRest](https://serverest.dev/#/)
 - [ServeRest - Datadog](https://p.datadoghq.eu/sb/421fcfee-35ec-11ee-b87f-da7ad0900005-2aaf85264a89d11b7001bcab452a266e?refresh_mode=sliding&theme=light&tpl_var_env%5B0%5D=serverest.dev&from_ts=1699931511294&to_ts=1699932411294&live=true)

 Descrição dos Testes
Cenário 1: Listar usuários

Endpoint: GET /users?page=2

Objetivo: Verificar se a API retorna a lista de usuários da página 2.

Validações:

Status HTTP 200 (OK).
Cenário 2: Buscar usuário por ID

Endpoint: GET /users/2

Objetivo: Verificar se a API retorna corretamente o usuário de ID 2.

Validações:

Status HTTP 200 (OK).
Usuário retornado possui id = 2.
Cenário 3: Criar usuário

Endpoint: POST /users

Objetivo: Verificar a criação de um novo usuário.

Validações:

Status HTTP 201 (Created).
Os dados enviados (name e job) são retornados pela API.
Cenário 4: Atualizar usuário

Endpoint: PUT /users/2

Objetivo: Verificar a atualização dos dados de um usuário existente.

Validações:

Status HTTP 200 (OK).
Nome e cargo atualizados são retornados pela API.
Cenário 5: Deletar usuário

Endpoint: DELETE /users/2

Objetivo: Verificar a exclusão de um usuário.

Validações:

Status HTTP 204 (No Content).
