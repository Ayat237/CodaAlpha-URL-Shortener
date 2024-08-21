//modules
import express from "express";
import {config} from "dotenv" 
//routers
import urlRouter from "./src/module/URL.routes.js";
//utils
import { ErrorClass } from "./src/utils/error-class.utils.js";
//middlewares
import { globaleResponse } from "./src/middleware/error-handling.middleware.js";

config();
const app = express();
const port = process.env.port || 5000;
app.use(express.json());
app.use("/URL", urlRouter);
app.use("/*", (req, res, next) => {
  return next(new ErrorClass(`Invalid URL : ${req.originalUrl}`, 404));
});
app.use(globaleResponse);

app.listen(port, () => console.log(`app listening on port ${port}!`));
