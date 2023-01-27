import { Request, Response } from 'express';
import { IController } from '../../presentation/controller/interface/controller-interface';
import { environment } from '../configuration/environment';

export function expressRouteAdapter(controller: IController) {
  return async (req: Request, res: Response) => {
    const {
      serverPort,
      routePrefix,
    } = environment;

    const host = req.hostname !== 'localhost'
      ? `${req.hostname + routePrefix}/` : `${req.hostname}:${serverPort + routePrefix}/`;

    const request: IController.Request = {
      body: req.body,
      params: req.params,
      host,
    };

    const { statusCode, data } = await controller.handle(request);

    if (statusCode === 301) {
      return res
        .status(301)
        .redirect(data!.redirectTo);
    }

    return res
      .status(statusCode)
      .json(data);
  };
}
