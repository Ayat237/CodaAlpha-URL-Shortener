import mongoose, { Schema, model } from "mongoose";

const urlSchema = new Schema(
  {
    originalURL: {
      type: String,
      required: true,
    },
    shortenedURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const URL = mongoose.models.URL || model("URL", urlSchema);

class UrlModel {
  constructor(collectionName, database) {
    this.collectionName = collectionName;
    this.database = database; // Use the passed database instance
  }

  async create(data) {
    return await this.database.createDocument(this.collectionName, data);
  }

  async find() {
    return await this.database.findDocument(this.collectionName);
  }
}

export { URL, UrlModel };
