import { IGetLongUrlUseCase } from './interface/get-long-url-use-case-interface';
import { IGetLongUrlCacheRepository } from '../infrastructure/repository/interface/get-long-url-cache-repository-interface';
import { IGetLongUrlRepository } from '../infrastructure/repository/interface/get-long-url-repository-interface';
import { IAddShortUrlCacheRepository } from '../infrastructure/repository/interface/add-short-url-cache-repository-interface';

export class GetLongUrlUseCase implements IGetLongUrlUseCase {
  constructor(
    private readonly getLongUrlRepository: IGetLongUrlRepository,
    private readonly getLongUrlCacheRepository: IGetLongUrlCacheRepository,
    private readonly addShortUrlCacheRepository: IAddShortUrlCacheRepository,
  ) {}

  async get(hash: string): Promise<IGetLongUrlUseCase.Response | Error> {
    const longUrlCached = await this.getLongUrlCacheRepository.get(hash);

    if (!longUrlCached) {
      const response = await this.getLongUrlRepository.get(hash);

      if (response) {
        const { longUrl, expireAt } = response;

        const now = new Date();
        const differenceInSeconds = (expireAt.getTime() - now.getTime()) / 1000;

        await this.addShortUrlCacheRepository.add(
          {
            longUrl,
            hash,
          },
          differenceInSeconds,
        );

        return {
          longUrl,
          expireAt,
        };
      }
    }

    return new Error(`${hash} does not exist or has expired`);
  }
}
