import { AddShortUrlCacheRepository } from '../../../../../infrastructure/repository/redis/add-short-url-cache-repository';

export function makeAddShortUrlCacheRepository() {
  return new AddShortUrlCacheRepository();
}
