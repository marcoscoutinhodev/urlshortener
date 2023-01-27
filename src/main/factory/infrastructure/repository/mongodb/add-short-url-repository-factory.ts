import { AddShortUrlRepository } from '../../../../../infrastructure/repository/mongodb/add-short-url-repository';
import { MongoHelper } from '../../../../../infrastructure/repository/mongodb/helper';
import { environment } from '../../../../configuration/environment';

export function makeAddShortUrlRepository() {
  const { mongoUri, secondsToUrlExpiration } = environment;
  return new AddShortUrlRepository(
    new MongoHelper(mongoUri),
    Number(secondsToUrlExpiration),
  );
}
