FROM node:alpine as client

WORKDIR /usr/app

COPY ./package.json ./
RUN yarn

COPY ./ ./

RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=client /usr/app/build /usr/share/nginx/html