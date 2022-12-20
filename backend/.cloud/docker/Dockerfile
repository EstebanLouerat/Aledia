FROM node:16-alpine AS base

RUN npm install -g npm@8.1.2

FROM base AS build

WORKDIR /usr/src/app
COPY . .
RUN npm install

EXPOSE 3001

CMD ["node", "server"]