FROM node:lts-alpine

WORKDIR /app

RUN npm install -g json-server

COPY . .

CMD ["json-server", "--port", "3000", "--host", "0.0.0.0", "/app/db.json"]