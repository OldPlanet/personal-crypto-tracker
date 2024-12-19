# Use Node.js LTS version as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Expose the port your backend listens on
EXPOSE 8000
EXPOSE 8080

# Start the backend server
CMD ["npm", "start"]
