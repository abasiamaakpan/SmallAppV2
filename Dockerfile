FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /SmallAppV2

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]