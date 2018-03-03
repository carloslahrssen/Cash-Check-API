FROM node:latest
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY package-lock.json /usr/scr/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]