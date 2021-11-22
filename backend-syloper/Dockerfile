FROM node:16
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . ./project
EXPOSE 4080
CMD npm run dev --prefix ./project
