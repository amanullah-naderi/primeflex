# wa_ss24_primeflex/frontend/Dockerfile

# Set the base image to use
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app/frontend

# Copy package.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code to the working directory
COPY . ./

# Build the frontend application
RUN npm run build

# Expose port 10034
EXPOSE 10034

# Set the command to run the frontend application
CMD [ "npm", "start" ]