FROM node:boron
RUN mkdir -p /usr/src/auth
WORKDIR /usr/src/auth
COPY package.json /usr/src/auth
RUN npm i
COPY . /usr/src/auth
CMD npm start
