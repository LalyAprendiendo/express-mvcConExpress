import db from "../database/movies.json";
import { writeFileSync } from "jsonfile";

async function getAll() {
  return db;

  //solicitamos la info a la bd
}

async function write(data) {
  writeFileSync("./src/database/movies.json", data)
  
}

export { getAll , write};
