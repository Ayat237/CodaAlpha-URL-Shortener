import mongoose from "mongoose";
import { IDatabase } from "./interfaces/IDatabase.js";
import { URL } from "./models/URL.models.js";


export class MongooseDatabase extends IDatabase {
  constructor(DB_URI) {
    super(); // Call to the parent class constructor
    this.DB_URI = DB_URI;
    this.models = {
      url: URL, // Assuming URL is your model
    };
  }
   
  async connect() {
    console.log("Attempting to connect to the database...");
    try {
      await mongoose.connect(this.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error in database connection:", error.message);
      throw error;
    }
  }

  async createDocument(collection, data) {
    const Model = this.models[collection];
    if (!Model) {
      throw new Error(`Model for ${collection} not found`);
    }
    const newModel = new Model(data);
    return await newModel.save();
  }

  async findDocument(collection) {
    // Implement your find logic here
  }
}
