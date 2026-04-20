const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/api/status", (_req, res) => {
  res.json({
    project: "studyboard-express",
    status: "ok",
    port: Number(port)
  });
});

module.exports = app;
