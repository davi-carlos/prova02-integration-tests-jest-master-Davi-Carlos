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

# 🧪 Prova 02 - Testes de Integração com Jest e PactumJS

Projeto desenvolvido para validação de endpoints da API pública **ReqRes**, utilizando **Jest**, **PactumJS**, **GitHub Actions** e **SonarCloud**.

## 📋 Objetivo

Realizar testes de integração em uma API REST, validando operações de consulta, criação, atualização e remoção de usuários, garantindo o funcionamento correto dos endpoints e das respostas retornadas pela API.

## 🚀 Tecnologias Utilizadas

- TypeScript
- Jest
- PactumJS
- GitHub Actions
- SonarCloud
- ReqRes API

## ✅ Cenários de Teste Implementados

### 1. Listar usuários

**Endpoint:** `GET /users?page=2`

**Objetivo:** Verificar se a API retorna corretamente a lista de usuários da página informada.

**Validação:**
- Status HTTP `200 OK`.

---

### 2. Buscar usuário por ID

**Endpoint:** `GET /users/2`

**Objetivo:** Verificar se um usuário específico pode ser consultado.

**Validações:**
- Status HTTP `200 OK`.
- Usuário retornado possui ID igual a `2`.

---

### 3. Criar usuário

**Endpoint:** `POST /users`

**Objetivo:** Validar a criação de um novo usuário.

**Validações:**
- Status HTTP `201 Created`.
- Retorno dos campos enviados (`name` e `job`).

---

### 4. Atualizar usuário

**Endpoint:** `PUT /users/2`

**Objetivo:** Validar a atualização de informações de um usuário existente.

**Validações:**
- Status HTTP `200 OK`.
- Dados atualizados retornados na resposta.

---

### 5. Excluir usuário

**Endpoint:** `DELETE /users/2`

**Objetivo:** Validar a remoção de um usuário.

**Validação:**
- Status HTTP `204 No Content`.

## ▶️ Executando o Projeto

Instale as dependências:

```bash
npm install
