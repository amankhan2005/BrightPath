import express from "express";
import { createCareer } from "../controllers/careerController.js";

const router = express.Router();

 router.post("/apply", createCareer);

export default router;