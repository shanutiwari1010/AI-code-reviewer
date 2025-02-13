import express from "express";
import getResponse from "../controller/ai.controller.js"; 

export const router = express.Router();

router.get("/get-response", getResponse);
