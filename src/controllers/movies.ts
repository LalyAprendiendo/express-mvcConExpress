import * as moviesModel from "../models/movie"

async function getAll(req, res) {
    const movies = moviesModel.getAll()

    res.status(200).json(movies)
}


export { getAll }