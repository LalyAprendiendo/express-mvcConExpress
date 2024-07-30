import { json } from "express";
import * as moviesModel from "../models/movie";

async function getAll(req, res) {
  const { movies } = await moviesModel.getAll();

  res.status(200).json(movies);
}

async function getInfo(req, res) {
  const { info } = await moviesModel.getAll();

  res.status(200).json(info);
}

async function getById(req, res) {
  const { movies } = await moviesModel.getAll();
  const movie = movies.find((movie) => movie.id == req.params.id);
  if (!movie) {
    return res.status(404).json({ message: "ID no encontrada" });
  }

  res.status(200).json(movie);
}

async function updateById(req, res) {
  const  db  = await moviesModel.getAll();
  const movie = db.movies.find((movie) => movie.id == req.params.id);
  if (!movie) {
    return res.status(404).json({ message: "ID no encontrada" });
  }
  console.log(req.body);
  
  movie.name = req.body.name;
  moviesModel.write(db);
  

  res.status(200).json(movie);
}

export { getAll, getInfo, getById , updateById };
