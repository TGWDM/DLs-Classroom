# Build stage - compiles TypeScript
FROM node:24.17.0 AS build
WORKDIR /app

# Copy dependencies first (caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage - serves static files with Nginx (faster than Node)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80