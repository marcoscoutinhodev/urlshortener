import { IAddShortUrlCacheRepository } from '../interface/add-short-url-cache-repository-interface';
import { RedisHelper } from './helper';

export class AddShortUrlCacheRepository implements IAddShortUrlCacheRepository {
  constructor(
    private readonly redisHelper: RedisHelper,
    private readonly secondsToDataExpiry: number,
  ) {}

  async add(data: IAddShortUrlCacheRepository.Data): Promise<void> {
    const redisClient = await this.redisHelper.getClient();
    await redisClient.set(data.hash, JSON.stringify(data), {
      EX: this.secondsToDataExpiry,
    });
  }
}
