FROM node:16-alpine AS base

RUN npm install -g npm@8.1.2

FROM base AS build

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=dev --force

COPY . .
RUN npm run build

FROM nginx:1-alpine as final

WORKDIR /usr/share/nginx/html

# La configuration de Nginx provient du projet https://github.com/h5bp/server-configs-nginx en version 4.2.0
COPY .cloud/docker/nginx-config/ /etc/nginx/
COPY .cloud/docker/01-prepare-nginx.sh /docker-entrypoint.d/01-prepare-nginx.sh
RUN chmod +x /docker-entrypoint.d/01-prepare-nginx.sh
# Le fichier default entre en conflit avec la configuration nginx pour le projet, on le supprime donc
RUN rm -f /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build .
