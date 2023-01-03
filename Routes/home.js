import express from 'express';
const router = express.Router()
import Favour from '../Controller/home.js';
router.get('/' , Favour)
export default router