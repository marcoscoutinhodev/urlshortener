import { IController } from './interface/controller-interface';
import { IGetLongUrlUseCase } from '../../use-case/interface/get-long-url-use-case-interface';
import { badRequest, redirect, serverError } from '../helper/http';
import { logError } from '../helper/log-error';

export class GetLongUrlController implements IController {
  constructor(
    private readonly getLongUrlUseCase: IGetLongUrlUseCase,
    private readonly amountOfHashBytes: number,
  ) {}

  async handle(request: IController.Request): Promise<IController.Response> {
    try {
      const hash = request.params?.hash
        ? String(request.params?.hash) : null;

      if (!hash) {
        return badRequest(new Error('hash is required'));
      }

      if (Buffer.byteLength(hash, 'utf8') !== this.amountOfHashBytes) {
        return badRequest(new Error(`hash must be equal to ${this.amountOfHashBytes} bytes`));
      }

      const data = await this.getLongUrlUseCase.get(hash);

      if (data instanceof Error) {
        return badRequest(data);
      }

      return redirect({
        redirectTo: data.longUrl,
      });
    } catch (err) {
      logError(err as Error);
      return serverError();
    }
  }
}
