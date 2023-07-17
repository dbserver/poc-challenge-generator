FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

#ENTRYPOINT ["tail", "-f", "/dev/null"]
CMD [ "node", "./dist/main.js" ]