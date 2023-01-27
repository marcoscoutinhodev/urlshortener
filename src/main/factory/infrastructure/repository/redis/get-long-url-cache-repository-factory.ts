import { GetLongUrlCacheRepository } from '../../../../../infrastructure/repository/redis/get-long-url-cache-repository';
import { RedisHelper } from '../../../../../infrastructure/repository/redis/helper';
import { environment } from '../../../../configuration/environment';

export function makeGetLongUrlCacheRepository() {
  return new GetLongUrlCacheRepository(
    new RedisHelper(environment.redisUri),
  );
}
