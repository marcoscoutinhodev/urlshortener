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
      const longUrl = request.body?.longUrl
        ? String(request.body?.longUrl) : null;

      if (!longUrl) {
        return badRequest(new Error('longUrl is required'));
      }

      if (Buffer.byteLength(longUrl, 'utf8') > 2048) {
        return badRequest(new Error('longUrl must be a maximum of 2KB'));
      }

      const data = await this.shortUrlGeneratorUseCase.generate(longUrl);
      const { host } = request;

      return ok({
        longUrl: data.longUrl,
        shortUrl: host + data.hash,
      });
    } catch (err) {
      logError(err as Error);
      return serverError();
    }
  }
}
