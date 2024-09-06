import express, {Request, Response} from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { authRoutes } from "./routes/auth.route";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Loading...");
});

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
