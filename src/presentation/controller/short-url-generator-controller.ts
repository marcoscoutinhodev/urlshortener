import { IController } from './interface/controller-interface';
import { IShortUrlGeneratorUseCase } from '../../use-case/interface/short-url-generator-use-case-interface';
import { badRequest, ok, serverError } from '../helper/http';
import { logError } from '../helper/log-error';

export class ShortUrlGeneratorController implements IController {
  constructor(
    private readonly shortUrlGeneratorUseCase: IShortUrlGeneratorUseCase,
  ) {}

  async handle(request: IController.Request): Promise<IController.Response> {
    try {
      const originalUrl = request.body?.originalUrl
        ? String(request.body?.originalUrl) : null;

      if (!originalUrl) {
        return badRequest(new Error('originalUrl is required'));
      }

      if (Buffer.byteLength(originalUrl, 'utf8') > 2048) {
        return badRequest(new Error('originalUrl must be a maximum of 2KB'));
      }

      const data = await this.shortUrlGeneratorUseCase.generate(originalUrl);

      return ok(data);
    } catch (err) {
      logError(err as Error);
      return serverError();
    }
  }
}
