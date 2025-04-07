# Build Stage
FROM node:16 as build

WORKDIR /app
COPY . .

RUN npm install && npm run build

# Production Stage
FROM nginx:alpine

# Copy the built frontend files into the Nginx server's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy the custom nginx.conf into the container (this should be in your project directory)
COPY nginx.conf /etc/nginx/conf.d/default.conf


# Expose port 80 and 443
EXPOSE 80 443

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
