# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies (Vite needs dev deps for build)
COPY package*.json ./

RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage - serve with nginx
FROM nginx:stable-alpine AS runner
LABEL org.opencontainers.image.source="https://github.com/MohamedElHaddati/react-portfolio"

# Remove default nginx config and add our own
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: expose healthcheck port and expose 80
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]