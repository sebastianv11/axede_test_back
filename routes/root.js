import express from 'express';
import seed_controller from "../controllers/seed_controller.js";


let router = express.Router();

router.post('/seeds', seed_controller.seed);

export default router;
