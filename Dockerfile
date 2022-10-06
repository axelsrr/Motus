FROM node:16

# Bundle app source

COPY package.json .

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "node", "serveurExpress.js" ]
