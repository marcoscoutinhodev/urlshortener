import { ShortUrlGeneratorController } from '../../../presentation/controller/short-url-generator-controller';
import { makeShortUrlGeneratorUseCase } from '../use-case/short-url-generator-use-case-factory';

export function makeShortUrlGeneratorController() {
  return new ShortUrlGeneratorController(
    makeShortUrlGeneratorUseCase(),
  );
}
