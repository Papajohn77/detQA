FROM node:lts-alpine as build-stage

WORKDIR /app

COPY detQA/package.json .

RUN npm install

COPY ./detQA .

RUN npm install -g @angular/cli@12.2.13

RUN ng build



FROM nginx:stable-alpine

COPY --from=build-stage /app/dist/detQA /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
