import { Collection, MongoClient } from 'mongodb';

class MongoHelper {
  private client: MongoClient | null = null;

  async connect(): Promise<void> {
    this.client = await MongoClient.connect('mongodb://mongodb-container:27017/url-shortner');
  }

  async getCollection(collection: string): Promise<Collection> {
    if (!this.client) { await this.connect(); }

    return this.client!
      .db('url-shortner')
      .command({ ping: 1 })
      .then(() => this.client!.db('url-shortner').collection(collection))
      .catch(async () => {
        await this.connect();
        return this.client!.db('url-shortner').collection(collection);
      });
  }
}

export const mongoHelper = new MongoHelper();
