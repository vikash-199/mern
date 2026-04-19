import express from 'express';
import { getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/user/:id', getAllUsers);

export default router;
