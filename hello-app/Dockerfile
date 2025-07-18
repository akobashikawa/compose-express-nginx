FROM nginx:alpine

# Instalar envsubst
RUN apk add --no-cache gettext

# Copiar archivos estáticos
COPY html/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy_params /etc/nginx/proxy_params

# Copiar script de entrada
COPY docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh

# Ejecutar script de entrada
CMD ["/docker-entrypoint.sh"]