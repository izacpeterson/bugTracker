FROM node:16.17.0
ENV NODE_ENV=production



WORKDIR /app

COPY . .

# RUN "./dockersetup.sh"



WORKDIR /app/app
RUN npm install
RUN npm rebuild
# RUN npm run build
# RUN npm run dev
WORKDIR /app/server
RUN npm install
RUN npm rebuild
# # CMD [ "npm", "install" ]
CMD [ "node", "index.js" ]