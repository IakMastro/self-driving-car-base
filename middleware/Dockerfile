FROM node:17-alpine3.13

WORKDIR /api

RUN apk add iptables net-tools nmap

COPY package*.json /api/

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
