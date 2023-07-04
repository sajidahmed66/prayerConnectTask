FROM node:16.17.0-alpine3.16 as build

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm ci 

COPY . .

RUN npm run build 

CMD ["npm", "run", "serve", "--host"]

EXPOSE 8080