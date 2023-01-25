FROM node:lts-slim as BASE

WORKDIR /usr/temp/

COPY . .

RUN yarn install; yarn build

FROM node:lts-slim as APP

WORKDIR /usr/url-shortener-server/

COPY package.json yarn.lock .
COPY --from=BASE /usr/temp/dist/ ./dist

RUN yarn install --prodution

EXPOSE 3000