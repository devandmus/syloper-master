FROM node:16

RUN mkdir -p /usr/backend-syloper

WORKDIR /usr/backend-syloper

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
