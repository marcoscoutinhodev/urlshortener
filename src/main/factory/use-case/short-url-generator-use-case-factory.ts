import { ShortUrlGeneratorUseCase } from '../../../use-case/short-url-generator-use-case';
import { makeHashAdapter } from '../infrastructure/adapter/hash-adapter-factory';
import { makeAddShortUrlRepository } from '../infrastructure/repository/mongodb/add-short-url-repository-factory';
import { makeAddShortUrlCacheRepository } from '../infrastructure/repository/redis/add-short-url-cache-repository-factory';

export function makeShortUrlGeneratorUseCase() {
  return new ShortUrlGeneratorUseCase(
    makeHashAdapter(),
    makeAddShortUrlRepository(),
    makeAddShortUrlCacheRepository(),
  );
}
