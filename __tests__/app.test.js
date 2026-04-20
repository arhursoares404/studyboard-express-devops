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
});
