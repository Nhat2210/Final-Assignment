import express from "express";
import { sendNewsletter } from "../controllers/emailController.js";

const emailRoutes = express.Router();
emailRoutes.post("/", sendNewsletter);

export default emailRoutes;
