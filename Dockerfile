FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

# Use legacy-peer-deps to avoid peer dependency conflicts
RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]