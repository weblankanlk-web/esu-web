FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# Use legacy-peer-deps to avoid peer dependency conflicts
RUN npm install --legacy-peer-deps

COPY . .

RUN cp sample.env .env

EXPOSE 3000

CMD ["npm", "start"]

# CMD ["npm", "run", "dev"]