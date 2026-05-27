# =========================
# Stage 1: Build React App
# =========================
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies (faster + CI-safe)
RUN npm ci

# Copy source code
COPY . .

# Build production app (Vite → dist)
RUN npm run build


# =========================
# Stage 2: Production (Nginx)
# =========================
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Add nginx config for React routing (IMPORTANT for SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]