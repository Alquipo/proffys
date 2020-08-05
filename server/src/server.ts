import express from "express";

const app = express();

app.get("/users", () => {
  console.log("acessou rota");
});

app.listen(3333);
