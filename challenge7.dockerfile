# ❌ Wrong - With Vulnerability
FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

USER root

RUN npm install

COPY . .

EXPOSE 8000
CMD ["node", "server.js"]