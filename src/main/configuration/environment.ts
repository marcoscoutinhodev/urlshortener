export const environment = {
  amountOfBytesToHash: process.env.AMOUNT_OF_BYTES_TO_HASH || '11',
  secondsToUrlExpiration: process.env.SECONDS_TO_URL_EXPIRATION || '86400', // 86400 represents 24 hours
  routePrefix: process.env.ROUTE_PREFIX || '/url',
  serverPort: process.env.SERVER_PORT || '3000',
};
