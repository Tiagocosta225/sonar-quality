const request = require("supertest");
const app = require("../src/app");

describe("GET /api/greet", () => {
  it("should return greeting message", async () => {
    const res = await request(app).get("/api/greet");

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Hello from API!" });
  });
});
