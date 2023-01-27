import { IAddShortUrlCacheRepository } from '../interface/add-short-url-cache-repository-interface';
import { RedisHelper } from './helper';

export class AddShortUrlCacheRepository implements IAddShortUrlCacheRepository {
  constructor(
    private readonly redisHelper: RedisHelper,
  ) {}

  async add(data: IAddShortUrlCacheRepository.Data, secondsToDataExpiry: number): Promise<void> {
    const redisClient = await this.redisHelper.getClient();
    await redisClient.set(data.hash, JSON.stringify(data), {
      EX: secondsToDataExpiry,
    });
  }
}
