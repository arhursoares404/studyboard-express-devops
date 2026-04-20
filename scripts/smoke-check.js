const http = require("http");

const request = http.get("http://localhost:3000/api/status", (response) => {
  let body = "";

  response.on("data", (chunk) => {
    body += chunk;
  });

  response.on("end", () => {
    if (response.statusCode !== 200) {
      console.error(`Falha no smoke test. Status recebido: ${response.statusCode}`);
      process.exit(1);
    }

    console.log(`Smoke test aprovado: ${body}`);
  });
});

request.on("error", (error) => {
  console.error(`Nao foi possivel acessar a aplicacao: ${error.message}`);
  process.exit(1);
});
