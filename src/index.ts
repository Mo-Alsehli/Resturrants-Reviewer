import express from "express";
import { config } from "./config/config";
import bodyParser from "body-parser";
import resturants_routes from "./handlers/resturants";
import reviews_routes from "./handlers/reviews";
import cors from "cors";
const path = require("path");

const app = express();
app.use(express.static("client/build"));

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
} */
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const port = config.port || 5000;

/* app.get(
  "/",
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send("SERVER STARTED");
    next();
  }
); */

resturants_routes(app);
reviews_routes(app);
app.listen(port, () => {
  console.log(`Server Started At: http://localhost:${port}`);
});

export default app;
