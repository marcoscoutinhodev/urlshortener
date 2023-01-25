/* eslint-disable no-console */
import express from 'express';

import { environment } from './main/configuration/environment';
import { router } from './main/route/routers';

import { mongoHelper } from './infrastructure/repository/mongodb/helper';
import { redisHelper } from './infrastructure/repository/redis/helper';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {
  routePrefix,
  serverPort,
  mongoUri,
  redisUri,
} = environment;

app.use(routePrefix, router);

app.listen(serverPort, async () => {
  await mongoHelper.connect(mongoUri);
  console.log('MongoDB Connected..');

  await redisHelper.connect(redisUri);
  console.log('Redis Connected..');

  console.log('Server is running...');
});
