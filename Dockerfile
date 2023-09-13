FROM node:latest as build-stage
WORKDIR /app
# ENV NODE_ENV production
# COPY package*.json ./
# RUN npm install
# RUN npm run build:pro
COPY . .


FROM nginx:stable-alpine
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 