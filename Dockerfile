FROM jwilder/nginx-proxy

# Copy the Web application, HTML and static content to NGINX server
COPY . /usr/share/nginx/html

# Remove existing nginx.tmpl to replace it with my version
RUN rm /app/nginx.tmpl

# Copy a configuration file from the current directory
ADD nginx.tmpl /app/

# Remove nginx.tmpl from html directory
CMD rm /usr/share/nginx/html/nginx.tmpl

# Expose ports
EXPOSE 80

CMD ["forego", "start", "-r"]

