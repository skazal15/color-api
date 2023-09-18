# Dockerfile
FROM node:16.10.0

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install -g @nestjs/cli@10.0.0

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
