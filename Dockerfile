FROM node:alpine as react

WORKDIR /usr/app

COPY packages/frontend/package.json .
RUN yarn

COPY packages/frontend .
RUN yarn build

FROM nginx
EXPOSE 80
COPY --from=react /usr/app/build /usr/share/nginx/html

