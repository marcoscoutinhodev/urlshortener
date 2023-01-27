/* eslint-disable no-console */
import express from 'express';
import cluster from 'node:cluster';
import os from 'node:os';

import { environment } from './main/configuration/environment';
import { router } from './main/route/routers';

cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isPrimary) {
  const totalCpu = os.cpus().length;
  console.log(`CPUs: ${totalCpu}`);
  console.log(`Primary ${process.pid} started...`);

  for (let i = 0; i < totalCpu; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker ${worker.process.pid} died`);

    cluster.fork();
  });
} else {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const {
    routePrefix,
    serverPort,
  } = environment;

  app.use(routePrefix, router);

  app.listen(serverPort, async () => {
    console.log(`PID ${process.pid}: server is running..`);
  });
}
