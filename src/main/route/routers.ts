import { Router } from 'express';
import { expressRouteAdapter } from './express-route-adapter';
import { makeShortUrlGeneratorController } from '../factory/controller/short-url-generator-controller-factory';

export const router = Router();

router.post('/generate', expressRouteAdapter(makeShortUrlGeneratorController()));
