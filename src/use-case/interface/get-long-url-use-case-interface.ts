export interface IGetLongUrlUseCase {
  get(hash: string): Promise<IGetLongUrlUseCase.Response | Error>
}

export namespace IGetLongUrlUseCase {
  export type Response = {
    longUrl: string
    expireAt: Date
  };
}
