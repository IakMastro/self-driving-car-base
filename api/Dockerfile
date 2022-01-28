FROM node:17-alpine3.13

WORKDIR /api

RUN apk add hping3 --update-cache --repository http://dl-cdn.alpinelinux.org/alpine/edge/testing && apk add net-tools

COPY package*.json /api/

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
