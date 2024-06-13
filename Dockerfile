FROM node:20.10.0-alpine3.18
WORKDIR /app

COPY public/ /app/public
COPY src/ /app/src
COPY node_modules/ /app/node_modules
COPY package*.json /app/
COPY tsconfig.json /app/

RUN npm i --prefer-offline --loglevel verbose
CMD ["npm", "start"]