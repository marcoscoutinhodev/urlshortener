import { GetLongUrlRepository } from '../../../../../infrastructure/repository/mongodb/get-long-url-repository';
import { MongoHelper } from '../../../../../infrastructure/repository/mongodb/helper';
import { environment } from '../../../../configuration/environment';

export function makeGetLongUrlRepository() {
  return new GetLongUrlRepository(
    new MongoHelper(environment.mongoUri),
  );
}
