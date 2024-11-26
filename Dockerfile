FROM node:18.19.1

WORKDIR /app

COPY package*.json ./

RUN npm install
# nodemon for dev only
# RUN npm install -g nodemon

COPY . .

# RUN tsc

EXPOSE 3000

CMD ["npm", "start"]