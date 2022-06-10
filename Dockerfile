
FROM node:14.17.1-alpine AS builder
COPY . ./wordGuessingGame
WORKDIR /wordGuessingGame
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.21.5-alpine
COPY --from=builder /wordGuessingGame/dist/wordGuessingGame/ /usr/share/nginx/html