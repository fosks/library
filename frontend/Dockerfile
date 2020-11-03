FROM node:12-alpine
RUN mkdir /app
COPY yarn.lock /app
WORKDIR /app
RUN yarn install --pure-lockfile
COPY . /app
CMD yarn start