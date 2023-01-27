import { ShortUrlGeneratorController } from '../../../presentation/controller/short-url-generator-controller';
import { makeShortUrlGeneratorUseCase } from '../use-case/short-url-generator-use-case-factory';
import { environment } from '../../configuration/environment';

export function makeShortUrlGeneratorController() {
  return new ShortUrlGeneratorController(
    makeShortUrlGeneratorUseCase(),
    Number(environment.amountOfBytesOfLongUrl),
  );
}
