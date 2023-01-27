export interface IAddShortUrlCacheRepository {
  add(data: IAddShortUrlCacheRepository.Data, secondsToDataExpiry?: number): Promise<void>
}

export namespace IAddShortUrlCacheRepository {
  export type Data = {
    originalUrl: string
    hash: string
  };
}
