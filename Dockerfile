FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
CMD ["yarn", "start"]
EXPOSE 3000
