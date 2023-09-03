# chord-api

Sistema back-end de Data scraping do cifra club que retorna um html string para utilização em um front-end.

## Instalação

clone o projeto

```bash
 git clone https://github.com/bezlima/chord-api.git
```

entre na pasta

```bash
cd chord-api
```

Atualize as dependências

```bash
npm install
```

Rodando o projeto

```bash
npm run dev
```

## Documentação da API

#### Retorna a cifra de uma música

```http
  GET /api/chord
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `artist`  | `string` | **Obrigatório**. A chave da sua API |
| `music`   | `string` | **Obrigatório**. A chave da sua API |

#### Retorna a cifra simplificada de uma música

```http
  GET /api/chord/simplified
```

| Parâmetro | Tipo     | Descrição                           |
| :-------- | :------- | :---------------------------------- |
| `artist`  | `string` | **Obrigatório**. A chave da sua API |
| `music`   | `string` | **Obrigatório**. A chave da sua API |
