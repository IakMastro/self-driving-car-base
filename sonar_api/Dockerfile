FROM node:17-alpine3.13

WORKDIR /sonar_api

COPY package*.json /sonar_api/

RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
