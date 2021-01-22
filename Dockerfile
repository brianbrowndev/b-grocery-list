FROM node:12.18.1 AS build-stage
WORKDIR /opt/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
ENV PATH="./node_modules/.bin:$PATH" 
COPY . .
RUN ng build --prod --aot --base-href '/groceries/'


FROM nginx:latest AS deploy-stage
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=build-stage /opt/app/dist/ .