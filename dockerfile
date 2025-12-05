FROM node:20-alpine

RUN apk --no-cache --update add git bash bash-completion

WORKDIR /home/node/app

EXPOSE 3000
