FROM node:17-alpine3.13

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
