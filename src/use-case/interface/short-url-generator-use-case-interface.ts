export interface IShortUrlGeneratorUseCase {
  generate(longUrl: string): Promise<IShortUrlGeneratorUseCase.Response>
}

export namespace IShortUrlGeneratorUseCase {
  export type Response = {
    longUrl: string
    hash: string
  };
}
