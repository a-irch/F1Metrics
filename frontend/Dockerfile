FROM node:22.11.0-slim

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8014
CMD ["npm", "run", "dev", "--turbopack", "--", "--port", "8014"]