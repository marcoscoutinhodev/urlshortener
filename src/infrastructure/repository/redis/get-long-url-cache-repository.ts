import { IGetLongUrlCacheRepository } from '../interface/get-long-url-cache-repository-interface';
import { RedisHelper } from './helper';

export class GetLongUrlCacheRepository implements IGetLongUrlCacheRepository {
  constructor(
    private readonly redisHelper: RedisHelper,
  ) {}

  async get(hash: string): Promise<IGetLongUrlCacheRepository.Response | null> {
    const redisClient = await this.redisHelper.getClient();
    const data = await redisClient.get(hash);

    if (data) {
      const { longUrl, expireAt } = JSON.parse(data);

      return {
        longUrl,
        expireAt,
      };
    }

    return null;
  }
}
