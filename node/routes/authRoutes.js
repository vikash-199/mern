import express from 'express';
import { registration } from '../controllers/authController';

const router = express.Router();

router.post('/signup', registration);

export default router;
