import { IShortUrlGeneratorUseCase } from './interface/short-url-generator-use-case-interface';
import { IHashAdapter } from '../infrastructure/adapter/interface/hash-adapter-interface';
import { IAddShortUrlRepository } from '../infrastructure/repository/interface/add-short-url-repository-interface';
import { IAddShortUrlCacheRepository } from '../infrastructure/repository/interface/add-short-url-cache-repository-interface';

export class ShortUrlGeneratorUseCase implements IShortUrlGeneratorUseCase {
  constructor(
    private readonly hashAdapter: IHashAdapter,
    private readonly addShortUrlRepository: IAddShortUrlRepository,
    private readonly addShortUrlCacheRepository: IAddShortUrlCacheRepository,
  ) {}

  async generate(originalUrl: string): Promise<IShortUrlGeneratorUseCase.Response> {
    const hash = await this.hashAdapter.hasher();
    const payload = {
      originalUrl,
      hash,
    };

    await this.addShortUrlRepository.add(payload);
    await this.addShortUrlCacheRepository.add(payload);

    return {
      originalUrl,
      hash,
    };
  }
}
