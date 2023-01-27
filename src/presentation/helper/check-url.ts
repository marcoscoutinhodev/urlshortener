import { URL } from 'node:url';

export const getFormattedUrl = (url: string): Promise<string | null> => new Promise((resolve) => {
  try {
    // eslint-disable-next-line no-new
    const info = new URL(url);
    resolve(info.href);
  } catch (err) {
    resolve(null);
  }
});
