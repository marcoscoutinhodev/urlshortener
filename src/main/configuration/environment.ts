export const environment = {
  amountOfHashBytes: process.env.AMOUNT_OF_HASH_BYTES || '11',
  amountOfBytesOfLongUrl: process.env.AMOUNT_OF_BYTES_OF_LONG_URL || '2048',
  secondsToUrlExpiration: process.env.SECONDS_TO_URL_EXPIRATION || '86400', // 86400 represents 24 hours
  routePrefix: process.env.ROUTE_PREFIX || '/url',
  serverPort: process.env.SERVER_PORT || '3000',
  mongoUri: process.env.MONGO_URI || 'mongodb://mongodb-container:27017/url-shortener',
  redisUri: process.env.REDIS_URI || 'redis://default:85043c96e31fc53b000@redis-container:6379',
};
