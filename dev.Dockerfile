# loads base as 22.13.0-alpine
FROM node:22.13.0-alpine

# Create app directory
WORKDIR /app

# gets the package.json and package-lock.json
COPY website/package.json /app/package.json
COPY website/package-lock.json /app/package-lock.json

# install the dependencies
RUN npm install

# Copy the rest of the files
COPY website/. /app/

# Expose the port
EXPOSE 3000

# Start the app     
CMD ["npm", "run", "dev", "--turbo"]

