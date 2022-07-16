import { Router } from 'express';
import get from '../controllers/server.js';

const router = Router()
router.get('/v1', get)
router.get('', get)

export default router
