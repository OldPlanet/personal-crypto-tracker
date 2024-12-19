# Use Node.js LTS version to build the React app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code
COPY . .

# Build the React application
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built React files to the Nginx container
COPY --from=build /src/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
