import express from "express";
import { config } from "./config/config";
import bodyParser from "body-parser";
import morgan from "morgan";
import resturants_routes from './handlers/resturants';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
const port = config.port || 5000;

app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.send("SERVER STARTED");
  next();
});

resturants_routes(app);
app.listen(port, () => {
  console.log(`Server Started At: http://localhost:${port}`);
});
