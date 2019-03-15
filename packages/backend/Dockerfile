FROM node:alpine

WORKDIR /usr/app

# only if package.json changing happens yarn runs
COPY package.json .
RUN yarn

COPY . .

CMD ["yarn", "start"]
