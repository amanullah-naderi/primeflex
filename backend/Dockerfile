# wa_ss24_primeflex/backend/Dockerfile

# Set the base image to use
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app/backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install && \
    npm install -g nodemon && \
    npm install dotenv && \
    npm install mongoose && \
    npm install bcrypt && \
    npm install validator && \
    npm install jsonwebtoken && \
    npm install axios

# Copy the rest of the application code to the working directory
COPY . ./

# Expose port 10033
EXPOSE 10033

# Set the command to run the application
CMD ["npm", "start", "dev"]