import { IController } from './interface/controller-interface';
import { IGetLongUrlUseCase } from '../../use-case/interface/get-long-url-use-case-interface';
import { badRequest, ok, serverError } from '../helper/http';
import { logError } from '../helper/log-error';

export class GetLongUrlController implements IController {
  constructor(
    private readonly getLongUrlUseCase: IGetLongUrlUseCase,
  ) {}

  async handle(request: IController.Request): Promise<IController.Response> {
    try {
      const hash = request.params?.hash
        ? String(request.params?.hash) : null;

      if (!hash) {
        return badRequest(new Error('hash is required'));
      }

      if (Buffer.byteLength(hash, 'utf8') > 11) {
        return badRequest(new Error('hash must be a maximum of 11 bytes'));
      }

      const data = await this.getLongUrlUseCase.get(hash);

      if (data instanceof Error) {
        return badRequest(data);
      }

      return ok({
        redirect: true,
        longUrl: data.longUrl,
      });
    } catch (err) {
      logError(err as Error);
      return serverError();
    }
  }
}
