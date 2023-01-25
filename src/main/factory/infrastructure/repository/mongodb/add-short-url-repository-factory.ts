import { AddShortUrlRepository } from '../../../../../infrastructure/repository/mongodb/add-short-url-repository';
import { environment } from '../../../../configuration/environment';

export function makeAddShortUrlRepository() {
  const { secondsToUrlExpiration } = environment;
  return new AddShortUrlRepository(Number(secondsToUrlExpiration));
}
