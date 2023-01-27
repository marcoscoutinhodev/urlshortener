import { createClient, RedisClientType } from 'redis';

export class RedisHelper {
  private redisClient: RedisClientType | null = null;
  constructor(
    private readonly redisUri: string,
  ) {}

  async connect(): Promise<void> {
    if (!this.redisClient) {
      this.redisClient = createClient({
        url: this.redisUri,
      });
    }

    await this.redisClient.connect();
  }

  async getClient(): Promise<RedisClientType> {
    if (!this.redisClient || !this.redisClient.isReady) {
      await this.connect();
    }

    return this.redisClient!;
  }
}
