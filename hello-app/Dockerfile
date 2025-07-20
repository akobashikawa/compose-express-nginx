# hello-app/Dockerfile (ejemplo)
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./html .
# También puedes copiar directorios específicos como:
# COPY ./html/js /usr/share/nginx/html/js
# ...

# Copiar configuraciones de Nginx directamente en la imagen
COPY nginx.conf /etc/nginx/nginx.conf
COPY proxy_params /etc/nginx/proxy_params

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]