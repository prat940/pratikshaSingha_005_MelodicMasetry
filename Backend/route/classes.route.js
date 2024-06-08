import express from "express";
import {getClasses } from "../controller/classes.controller.js";

const router = express.Router();

router.get("/", getClasses);

export default router;