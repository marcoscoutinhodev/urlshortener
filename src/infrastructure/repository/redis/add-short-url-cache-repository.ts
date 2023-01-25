import { IAddShortUrlCacheRepository } from '../interface/add-short-url-cache-repository-interface';
import { redisHelper } from './helper';

export class AddShortUrlCacheRepository implements IAddShortUrlCacheRepository {
  async add(data: IAddShortUrlCacheRepository.Data): Promise<void> {
    const redisClient = await redisHelper.getClient();
    await redisClient.set(data.hash, JSON.stringify(data));
  }
}
