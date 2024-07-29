import express, { json } from 'express';


import * as moviesController from "./controllers/movies"

const PORT = 8080;
const app = express();

// MIDDLEWARES



// ROUTES 

app.get("/api/movies", async (req, res) => {
	moviesController.getAll(req, res)
})

// SERVER 

app.listen(PORT, () => {
	console.log('Server listening on port', PORT);
});
