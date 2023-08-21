FROM node:18-alpine as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine as runner

COPY --from=builder /app/.env ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/configuration ./configuration
COPY --from=builder /app/tsconfig.json ./tsconfig.json
COPY --from=builder /app/tsconfig.build.json ./tsconfig.build.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "run", "start"]
