import express from "express";

import { generateImage } from "../controllers/openaiControllers.js";

const router = express.Router();

router.post("/generateImage", generateImage);

export default router;
