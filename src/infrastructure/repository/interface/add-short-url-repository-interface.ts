export interface IAddShortUrlRepository {
  add(data: IAddShortUrlRepository.Data): Promise<void>
}

export namespace IAddShortUrlRepository {
  export type Data = {
    originalUrl: string
    hash: string
  };
}
