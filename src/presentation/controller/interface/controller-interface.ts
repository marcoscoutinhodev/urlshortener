export interface IController {
  handle(request: IController.Request): Promise<IController.Response>
}

export namespace IController {
  export type Request = {
    host: string
    body?: { [key:string]: any }
    params?: { [key:string]: string }
  };

  export type Response = {
    statusCode: number
    data?: { [key:string]: any }
  };
}
