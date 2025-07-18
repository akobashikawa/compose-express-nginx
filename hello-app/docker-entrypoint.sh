#!/bin/sh

# Reemplazar la configuración en index.html
envsubst < /usr/share/nginx/html/config.template.js > /usr/share/nginx/html/js/config.js

# Ejecutar nginx
nginx -g 'daemon off;'