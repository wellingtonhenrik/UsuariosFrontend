# usuariosWeb - Angular User Management App

Este é um aplicativo Angular chamado `usuariosWeb` que permite gerenciar usuários através de uma API para cadastro, edição e criação de usuários. Para realizar a edição de um usuário, é necessário utilizar o token de acesso armazenado no `localStorage` do navegador.

## Requisitos

Certifique-se de ter o Node.js e o Angular CLI instalados:

- Node.js: [Download](https://nodejs.org/)
- Angular CLI: Instale usando o comando `npm install -g @angular/cli`

## Configuração do Projeto

1. Clone o repositório: `git clone https://github.com/seu-usuario/usuariosWeb.git`
2. Navegue até o diretório: `cd usuariosWeb`
3. Instale as dependências: `npm install`

## Configuração da API

Este aplicativo consome uma API para realizar operações de CRUD de usuários. Certifique-se de ter a URL da API configurada corretamente no arquivo de configuração.

Exemplo de arquivo de configuração (`src/environments/environment.ts`):

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://sua-api.com/users',
};
