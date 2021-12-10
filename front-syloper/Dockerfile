FROM node:17-alpine

RUN mkdir "frontend"

WORKDIR /frontend

COPY package.json .

COPY storybook-static .

COPY .storybook .

COPY src .

# RUN npm install -g npm@8.2.0

RUN npm install -g gatsby-cli

RUN npm install

RUN apk add curl

ENTRYPOINT ["npm", "start"]
