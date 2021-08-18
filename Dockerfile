
FROM node:current-alpine

RUN apk update && apk upgrade && \
  apk add --no-cache bash git openssh

WORKDIR /usr/src/app
ENV PORT 5000
EXPOSE $PORT

RUN npm install -g serve

RUN git clone https://github.com/andcastillo/jsonvierwer.git
RUN mv jsonvierwer/* .
RUN npm install
RUN npm run build
CMD [ "serve", "-s", "build" ]
