FROM node:16-alpine

COPY entrypoint.js entrypoint.js
COPY package* ./
RUN npm i

ENTRYPOINT ["/entrypoint.js"]