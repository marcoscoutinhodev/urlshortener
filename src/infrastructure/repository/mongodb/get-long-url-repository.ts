import { IGetLongUrlRepository } from '../interface/get-long-url-repository-interface';
import { MongoHelper } from './helper';

export class GetLongUrlRepository implements IGetLongUrlRepository {
  constructor(
    private readonly mongoHelper: MongoHelper,
  ) {}

  async get(hash: string): Promise<IGetLongUrlRepository.Response | null> {
    const urlsCollection = await this.mongoHelper.getCollection('urls');
    const data = await urlsCollection.findOne({ hash });

    if (data) {
      const { longUrl, expireAt } = data;

      return {
        longUrl,
        expireAt,
      };
    }

    return null;
  }
}
