import { IAddShortUrlRepository } from '../interface/add-short-url-repository-interface';
import { mongoHelper } from './helper';

export class AddShortUrlRepository implements IAddShortUrlRepository {
  constructor(
    private readonly secondsToDataExpiry: number,
  ) {}

  async add(data: IAddShortUrlRepository.Data): Promise<void> {
    const urlsCollection = await mongoHelper.getCollection('urls');

    const createdAt = new Date();
    const expireAt = new Date();
    expireAt.setHours(createdAt.getHours() + (this.secondsToDataExpiry / 3600));

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
