FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY app.conf /etc/nginx/conf.d/
RUN mkdir /etc/nginx/ssl
COPY nginx.key /etc/nginx/ssl/
COPY nginx.crt /etc/nginx/ssl/
