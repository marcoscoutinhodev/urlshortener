import { GetLongUrlUseCase } from '../../../use-case/get-long-url-use-case';
import { makeGetLongUrlRepository } from '../infrastructure/repository/mongodb/get-long-url-repository-factory';
import { makeAddShortUrlCacheRepository } from '../infrastructure/repository/redis/add-short-url-cache-repository-factory';
import { makeGetLongUrlCacheRepository } from '../infrastructure/repository/redis/get-long-url-cache-repository-factory';

export function makeGetLongUrlUseCase() {
  return new GetLongUrlUseCase(
    makeGetLongUrlRepository(),
    makeGetLongUrlCacheRepository(),
    makeAddShortUrlCacheRepository(),
  );
}
