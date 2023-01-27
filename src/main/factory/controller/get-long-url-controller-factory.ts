import { GetLongUrlController } from '../../../presentation/controller/get-long-url-controller';
import { makeGetLongUrlUseCase } from '../use-case/get-long-url-use-case-factory';
import { environment } from '../../configuration/environment';

export function makeGetLongUrlController() {
  return new GetLongUrlController(
    makeGetLongUrlUseCase(),
    Number(environment.amountOfHashBytes),
  );
}
