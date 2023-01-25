export interface IShortUrlGeneratorUseCase {
  generate(originalUrl: string): Promise<IShortUrlGeneratorUseCase.Response>
}

export namespace IShortUrlGeneratorUseCase {
  export type Response = {
    originalUrl: string
    hash: string
  };
}
