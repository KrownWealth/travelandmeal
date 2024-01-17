FROM node:20.10.0

WORKDIR /src

COPY package*.json .

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
