FROM node:22.13.0 AS build
WORKDIR /app
ADD package.json /app
RUN npm install 
ADD . /app
RUN npm run build 

FROM nginx:stable-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html