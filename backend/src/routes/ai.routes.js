import express from "express";
import getReview from "../controller/ai.controller.js"; 

export const router = express.Router();

router.post("/get-review", getReview);
