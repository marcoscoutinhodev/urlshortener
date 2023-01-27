import { randomBytes } from 'node:crypto';
import { IHashAdapter } from './interface/hash-adapter-interface';

export class HashAdapter implements IHashAdapter {
  constructor(
    private readonly bytes: number,
  ) {}

  async hasher(): Promise<string> {
    return new Promise((resolve, reject) => {
      randomBytes(this.bytes, (err, buffer) => {
        if (err) {
          return reject(err);
        }

        return resolve(buffer.toString('hex').substring(0, 11));
      });
    });
  }
}
