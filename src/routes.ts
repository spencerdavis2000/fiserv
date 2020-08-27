/**
 * Place we can keep the GET and POST endpoints
 */

import express from 'express';
const router = express.Router();

import { defaultRoute } from './controllers/defaultRoute';
import { parse } from './controllers/parse';

router.get('/parse', parse);
router.all('*', defaultRoute);

export default router;