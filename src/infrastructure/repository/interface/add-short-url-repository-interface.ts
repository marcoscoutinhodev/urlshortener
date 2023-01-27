export interface IAddShortUrlRepository {
  add(data: IAddShortUrlRepository.Data, createdAt: Date, expireAt: Date): Promise<void>
}

export namespace IAddShortUrlRepository {
  export type Data = {
    longUrl: string
    hash: string
  };
}
