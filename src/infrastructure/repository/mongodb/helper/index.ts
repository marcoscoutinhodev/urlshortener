import { Collection, MongoClient } from 'mongodb';

export class MongoHelper {
  private mongoClient: MongoClient | null = null;

  constructor(
    private readonly mongoUri: string,
  ) {}

  async connect(): Promise<void> {
    this.mongoClient = await MongoClient.connect(this.mongoUri);
  }

  async disconnect(): Promise<void> {
    if (this.mongoClient) {
      const isConnected = await this.mongoClient.db('url-shortener').command({ ping: 1 });
      if (isConnected) {
        this.mongoClient.close();
      }
    }
  }

  async getCollection(collection: string): Promise<Collection> {
    if (!this.mongoClient) { await this.connect(); }

    return this.mongoClient!
      .db('url-shortener')
      .command({ ping: 1 })
      .then(() => this.mongoClient!.db('url-shortener').collection(collection))
      .catch(async () => {
        await this.connect();
        return this.mongoClient!.db('url-shortener').collection(collection);
      });
  }
}
