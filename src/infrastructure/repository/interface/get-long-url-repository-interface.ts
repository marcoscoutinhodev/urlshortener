export interface IGetLongUrlRepository {
  get(hash: string): Promise<IGetLongUrlRepository.Response | null>
}

export namespace IGetLongUrlRepository {
  export type Response = {
    longUrl: string
    expireAt: Date
  };
}
