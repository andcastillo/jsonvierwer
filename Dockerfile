
FROM node:current-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /usr/src/app
ENV PORT 3000
EXPOSE $PORT

RUN git clone https://github.com/andcastillo/jsonvierwer.git
RUN mv jsonvierwer/* .
RUN npm install
CMD [ "npm", "run", "start" ]
