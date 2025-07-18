# Express Hello Docker Compose Demo

Una aplicación simple que demuestra el uso de Docker Compose con Express.js y Nginx.

## Estructura del Proyecto

```
compose-express-hello/
├── docker-compose.yml
├── hello-service/
│   ├── Dockerfile
│   ├── package.json
│   ├── server.js
│   └── app.js
└── hello-app/
    ├── Dockerfile
    ├── nginx.conf
    ├── proxy_params
    └── html/
        ├── index.html
        └── js/
            ├── App.js
            ├── config.js
            └── main.js
```

## Requisitos Previos

- Docker Desktop
- Node.js (para desarrollo local)
- Git

## Instalación

1. Clonar el repositorio:
```bash
git clone <repository-url>
cd compose-express-hello
```

2. Construir y ejecutar los contenedores:
```bash
docker-compose up --build
```

## Servicios

### hello-service (Backend)
- Puerto: 3000
- Endpoint: `/api/hello?name=<nombre>`
- Tecnología: Express.js

### hello-app (Frontend)
- Puerto: 80
- Tecnología: Vue.js + Nginx
- Sirve la interfaz de usuario y actúa como proxy inverso

## Desarrollo

### Comandos Útiles

```bash
# Iniciar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down

# Reconstruir y reiniciar
docker-compose up --build

# Detener y eliminar volúmenes
docker-compose down -v
```

### Desarrollo Local

1. Iniciar el servicio backend:
```bash
cd hello-service
npm install
npm run dev
```

2. Servir el frontend:
```bash
cd hello-app
# Usar un servidor local como live-server
```

## Configuración

### Variables de Entorno

- `NODE_ENV`: Entorno de ejecución (development/production)
- `PORT`: Puerto para el servicio backend (default: 3000)

## Pruebas

Acceder a la aplicación:
- Frontend: `http://localhost`
- API Backend: `http://localhost:3000/api/hello?name=Usuario`

## Licencia

MIT