# StudyBoard Express

Projeto simples em Node.js com Express criado para praticar:

- versionamento com Git e GitHub
- integração contínua com GitHub Actions
- entrega contínua com build em workflow
- empacotamento da aplicação com Docker

## Como rodar localmente

```bash
npm install
npm start
```

Aplicação disponível em `http://localhost:3000`.

Se quiser alterar a porta localmente, crie um arquivo `.env` com base no
arquivo `.env.example`.

## Testes

```bash
npm test
```

## Smoke test

Com o servidor em execução, também é possível validar rapidamente a API:

```bash
npm run smoke
```

## Docker

```bash
docker build -t studyboard-express .
docker run -d -p 3000:3000 --name studyboard studyboard-express
```

Para validar o container em execução, um comando útil é:

```bash
docker ps
```
