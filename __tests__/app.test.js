const request = require("supertest");
const app = require("../src/app");

describe("StudyBoard Express", () => {
  test("GET /api/status should return project information", async () => {
    const response = await request(app).get("/api/status");

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject({
      project: "studyboard-express",
      status: "ok"
    });
  });

  test("GET / should serve the home page", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("StudyBoard Express");
  });

  test("GET /about.html should serve about page", async () => {
    const response = await request(app).get("/about.html");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Sobre este projeto");
  });

  test("GET /api/status should return numeric port", async () => {
    const response = await request(app).get("/api/status");

    expect(typeof response.body.port).toBe("number");
    expect(Number.isNaN(response.body.port)).toBe(false);
  });

  test("GET /api/status should use JSON content type", async () => {
    const response = await request(app).get("/api/status");

    expect(response.headers["content-type"]).toContain("application/json");
  });

  test("GET unknown route should return 404", async () => {
    const response = await request(app).get("/rota-inexistente");

    expect(response.statusCode).toBe(404);
    expect(response.body).toMatchObject({
      status: "error",
      message: "Rota nao encontrada"
    });
  });
});
