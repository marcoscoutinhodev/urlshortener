import { AddShortUrlCacheRepository } from '../../../../../infrastructure/repository/redis/add-short-url-cache-repository';
import { RedisHelper } from '../../../../../infrastructure/repository/redis/helper';
import { environment } from '../../../../configuration/environment';

export function makeAddShortUrlCacheRepository() {
  const {
    redisUri,
  } = environment;

  return new AddShortUrlCacheRepository(
    new RedisHelper(redisUri),
  );
}
