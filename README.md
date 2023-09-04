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
  GET /api/chord/${artist}/${music}
```

| Parâmetro | Tipo     | Descrição        |
| :-------- | :------- | :--------------- |
| `artist`  | `string` | **Obrigatório**. |
| `music`   | `string` | **Obrigatório**. |

#### Retorna a cifra simplificada de uma música

```http
  GET /api/chord/simplified/${artist}/${music}
```

| Parâmetro | Tipo     | Descrição        |
| :-------- | :------- | :--------------- |
| `artist`  | `string` | **Obrigatório**. |
| `music`   | `string` | **Obrigatório**. |

#### Exemplo de requisição fetch:

```ts
fetch(`http://localhost:8000/api/chord/skank/sutilmente/`)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Erro na requisição')
        }
        return response.json()
    })
    .then((data) => {
        setMusic(data.cipher)
    })
    .catch((error) => {
        console.error('Erro:', error)
    })
```

#### Exemplo de requisição axios:

```ts
axios
    .get('http://localhost:8000/api/chord/skank/sutilmente/')
    .then((res) => {
        setMusic(res.data.cipher)
    })
    .catch((error) => {
        console.error('Erro:', error)
    })
```

#### Exemplo de uso em ReactJS:

```ts
import { useEffect, useState } from 'react'

export default function Music() {
    const [music, setMusic] = useState<string>('')

    useEffect(() => {
        fetch(`http://localhost:8000/api/chord/skank/sutilmente/`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro na requisição')
                }
                return response.json()
            })
            .then((data) => {
                setMusic(data.cipher)
            })
            .catch((error) => {
                console.error('Erro:', error)
            })
    }, [])

    return <div dangerouslySetInnerHTML={{ __html: music }}></div>
}
```
