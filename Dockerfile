FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Set environment variables if needed
RUN cp sample.env .env

# Build the Next.js app for production
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
