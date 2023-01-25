export interface IHashAdapter {
  hasher(): Promise<string>
}
