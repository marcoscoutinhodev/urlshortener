import { Router } from 'express';
import { expressRouteAdapter } from './express-route-adapter';
import { makeShortUrlGeneratorController } from '../factory/controller/short-url-generator-controller-factory';
import { makeGetLongUrlController } from '../factory/controller/get-long-url-controller-factory';

export const router = Router();

router.post('/generate', expressRouteAdapter(makeShortUrlGeneratorController()));
router.get('/:hash', expressRouteAdapter(makeGetLongUrlController()));
