import { Collection, MongoClient } from 'mongodb';

class MongoHelper {
  private mongoClient: MongoClient | null = null;
  private mongoUri: string | null = null;

  async connect(mongoUri: string): Promise<void> {
    if (!this.mongoUri) {
      this.mongoUri = mongoUri;
    }

    this.mongoClient = await MongoClient.connect(this.mongoUri);
  }

  async getCollection(collection: string): Promise<Collection> {
    if (!this.mongoClient) { await this.connect(this.mongoUri!); }

    return this.mongoClient!
      .db('url-shortener')
      .command({ ping: 1 })
      .then(() => this.mongoClient!.db('url-shortener').collection(collection))
      .catch(async () => {
        await this.connect(this.mongoUri!);
        return this.mongoClient!.db('url-shortener').collection(collection);
      });
  }
}

export const mongoHelper = new MongoHelper();
