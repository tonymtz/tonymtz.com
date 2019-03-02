FROM nginx:alpine
LABEL maintainer="tonymtz <hello@tonymtz.com>"

COPY . /usr/share/nginx/html
