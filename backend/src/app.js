import express from "express";
import { router } from "./routes/ai.routes.js"; // Ensure correct import
import cors from 'cors'

const app = express();


app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/ai", router);

export default app;
