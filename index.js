import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import openai from "./routes/openaiRoutes.js";

const app = express();

// middleware that will be executed for every request "/", "/apple", "/apple/trees"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("home page");
});

app.use("/openai", openai);

app.listen(process.env.PORT || 5000, () => console.log("listening"));
