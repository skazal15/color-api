# Dockerfile
FROM node:16.10.0

WORKDIR /app

COPY package*.json ./

RUN npm install -g

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
