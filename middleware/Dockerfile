FROM node:17-alpine3.13

WORKDIR /api

RUN apk add iptables net-tools nmap tcpdump

COPY package*.json /api/

RUN npm install

COPY . .

EXPOSE 8351
CMD ["npm", "run", "serve"]
