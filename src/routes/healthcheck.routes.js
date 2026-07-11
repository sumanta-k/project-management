import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";

const router = Router();
router.route("/").get(healthCheck);
// router.route("/instagram").get(instaCheck); // if additional routes created then this will serve it

export default router;
