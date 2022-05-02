FROM mcr.microsoft.com/playwright:v1.21.0-focal

WORKDIR /playwright

COPY package.json package-lock.json /playwright/
RUN npm ci

COPY . .

