FROM node:16-buster

WORKDIR /application

COPY package.json package-lock.json /application/
RUN npm ci

COPY . .

