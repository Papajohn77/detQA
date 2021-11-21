FROM node:lts-alpine

WORKDIR /app

COPY detQA/package.json .

RUN npm install

RUN npm install -g @angular/cli

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll"]

# docker-compose up -d --build
# docker-compose exec angular-frontend ng generate component xyz