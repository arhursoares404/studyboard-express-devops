# StudyBoard Express

Projeto simples em Node.js com Express criado para a disciplina de DevOps.
O objetivo deste repositório é demonstrar um fluxo básico de Git, GitHub
Actions, pull request e Docker em uma aplicação pequena e fácil de entender.

## Tecnologias

- Node.js
- Express
- Jest
- Supertest
- Docker
- GitHub Actions

## Como rodar localmente

```bash
npm install
npm start
```

A aplicação fica disponível em `http://localhost:3000`.

Se quiser alterar a porta, use o arquivo `.env.example` como base para criar
um `.env`.

## Testes

```bash
npm test
```

## Smoke test

Com a aplicação rodando localmente:

```bash
npm run smoke
```

## Docker

```bash
docker build -t studyboard-express .
docker run -d -p 3000:3000 --name studyboard studyboard-express
docker ps
```

## Alertas no Discord via GitHub Actions

1. Crie um webhook no canal do Discord.
2. No GitHub, acesse `Settings > Secrets and variables > Actions`.
3. Cadastre o secret `DISCORD_WEBHOOK_URL` com a URL do webhook.
4. O workflow `.github/workflows/alerts.yml` envia alertas em:
   - push em `main` e `feature/**`
   - eventos de PR para `main` (opened, synchronize, reopened, closed/merged)
