export interface IGetLongUrlCacheRepository {
  get(hash: string): Promise<IGetLongUrlCacheRepository.Response | null>
}

export namespace IGetLongUrlCacheRepository {
  export type Response = {
    longUrl: string
  };
}
