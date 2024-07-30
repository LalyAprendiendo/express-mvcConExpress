// Crear un servidor HTTP con ExpressJS. El mismo debe tener los siguientes endpoints:
// - GET '/api' --> Devuelve la información general de la base de datos.
// - GET '/api/movies' --> Devuelve una collection en formato JSON con todas las películas de la DB.
// - GET '/api/movies/:id' --> Devuelve una película según su ID.
// - POST '/api/movies' --> Crea una nueva película en la base de datos y responde al cliente con el código según corresponda.
// - PATCH '/api/movies/:id' --> Actualiza parcialmente la información de la película indicada por el ID.

import express, { json } from "express";

import * as moviesController from "./controllers/movies";

const PORT = 8080;
const app = express();

// MIDDLEWARES
app.use(json())
// ROUTES
app.get("/api", async (req, res) => {
  moviesController.getInfo(req, res);
});

app.get("/api/movies", async (req, res) => {
  moviesController.getAll(req, res);
});

app.get("/api/movies/:id", async (req, res) => {
	moviesController.getById(req, res);
  });

  app.patch("/api/movies/:id", async (req, res) => {
    moviesController.updateById(req, res);
    });
// SERVER

app.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
