import { createClient, RedisClientType } from 'redis';

class RedisHelper {
  private redisClient: RedisClientType | null = null;
  private redisUri: string | null = null;

  async connect(redisUri: string): Promise<void> {
    if (!this.redisUri) {
      this.redisUri = redisUri;
    }

    if (!this.redisClient) {
      this.redisClient = createClient({
        url: this.redisUri,
      });
    }

    await this.redisClient.connect();
  }

  async getClient(): Promise<RedisClientType> {
    if (!this.redisClient!.isReady) {
      await this.connect(this.redisUri!);
    }

    return this.redisClient!;
  }
}

export const redisHelper = new RedisHelper();
