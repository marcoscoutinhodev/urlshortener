import { IAddShortUrlRepository } from '../interface/add-short-url-repository-interface';
import { MongoHelper } from './helper';

export class AddShortUrlRepository implements IAddShortUrlRepository {
  constructor(
    private readonly mongoHelper: MongoHelper,
  ) {}

  async add(data: IAddShortUrlRepository.Data, createdAt: Date, expireAt: Date): Promise<void> {
    const urlsCollection = await this.mongoHelper.getCollection('urls');

    await urlsCollection.insertOne({
      ...data,
      createdAt,
      expireAt,
    });

    await urlsCollection.createIndex(
      { expireAt: 1 },
      { expireAfterSeconds: 0 },
    );
  }
}
