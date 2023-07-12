# ✅ Right - Without Vulnerability
FROM node:16

WORKDIR /usr/src/app

COPY package*.json .

# The problem is here, don't ser user with 'root'
USER node

RUN npm install

COPY . .

EXPOSE 8000
CMD ["node", "server.js"]