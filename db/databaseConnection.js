import { UrlModel } from "./models/URL.models.js";
import { MongooseDatabase } from "./mongoDatabase.js";

const database = new MongooseDatabase("mongodb://localhost:27017/URL");

database.connect();
console.log("finished");

export {database};