import express from 'express';
import PublicController from '../controllers/public_controller.js';

let router = express.Router();

router.get('/health-check', PublicController.healthCheck);

export default router;
