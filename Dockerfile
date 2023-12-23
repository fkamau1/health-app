FROM node:19-alpine

ENV MONGO_DB_USERNAME=bmiUser \
    MONGO_DB_PWD=password

RUN mkdir -p /home/app

COPY . /home/app/ 

WORKDIR /home/app

CMD ["node", "app.js"]