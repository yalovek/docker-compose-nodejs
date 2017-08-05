FROM node:boron
RUN mkdir -p /usr/src/data
WORKDIR /usr/src/data
COPY package.json /usr/src/data
RUN npm i
COPY . /usr/src/data
CMD npm start
