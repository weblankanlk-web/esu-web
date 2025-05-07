FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies (will be cached)
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY docker/dev/dev.env .env

# Set default command (can be overridden in docker-compose)
CMD ["npm", "run", "dev"]
