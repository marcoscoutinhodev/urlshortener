
# URL Shortener

This project is for a job interview




## Run Locally

Clone the project

```bash
  git clone https://github.com/marcoscoutinhodev/urlshortener
```

Go to the project directory

```bash
  cd urlshortener
```

Start the server

```bash
  docker-compose up -d
  
  - To rebuild the server, type: docker-compose build service && docker-compose up -d
  - To view the logs, type: docker logs --follow ms-url-shortener
```

#### If you don't use Docker, you need to configure a server for MongoDB/Redis and the URI of each environment to run the server

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```
## Environments
  - AMOUNT_OF_HASH_BYTES -> Bytes to hash: default 11 bytes
  - AMOUNT_OF_BYTES_OF_LONG_URL -> Bytes to long url: default 2048 bytes
  - SECONDS_TO_URL_EXPIRATION -> Seconds for data to expire in MongoDB/Redis: default 86400 seconds (24 hours) for MongoDB and half value for Redis
  - ROUTE_PREFIX -> Prefix for routes: default is '/url'
  - SERVER_PORT -> Default port: 3000
  - MONGO_URI / REDIS_URI -> URI for connection: default use Docker

  * You can change the default values in '<rootDir>/src/main/configuration/environment.ts'

    To use your MongoDB/Redis server, just configure the environment. Since the purpose of redis is only to improve performance, it is recommended to keep Docker responsible for building and using the Redis server.




## API Reference

###

#### Generate short url

* Default route prefix: '/url'

```http
  POST /url/generate
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `longUrl` | `string` | **Required**. Must be a valid URL and up to 2 KB |

In case of success it returns 200 and a json with '{ longUrl: string, shortUrl: string }'

#### Redirect to original URL

```http
  GET /url/{[hash}}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `hash`      | `string` | **Required**. hash returned by 'POST /url/generate' |

In case of success, it returns 301 and will be redirected to the original URL


## Tech Stack

**Server:** Node, Express, TypeScript, MongoDb, Redis, node:cluster, node:os, node:url, node:crypto, Docker

