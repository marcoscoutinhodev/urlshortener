import { createClient, RedisClientType } from 'redis';

class RedisHelper {
  private redisClient: RedisClientType | null = null;

  async getClient(): Promise<RedisClientType> {
    if (!this.redisClient) {
      this.redisClient = createClient({
        url: 'redis://default:85043c96e31fc53b000@redis-container:6379',
      });
    }

    if (!this.redisClient.isReady) {
      await this.redisClient.connect();
    }

    return this.redisClient;
  }
}

export const redisHelper = new RedisHelper();
