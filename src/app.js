// src/app.js
const express = require("express");
const app = express();

app.use(express.json());

const greetRoute = require("./routes/greet.route");
app.use("/api", greetRoute);

// NÃO dá app.listen aqui para testes
module.exports = app;
