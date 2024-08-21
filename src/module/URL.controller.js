import database from "../../db/databaseConnection.js";
import { UrlModel } from "../../db/models/URL.models.js";



console.log("start");

const urlModel = new UrlModel(database);


