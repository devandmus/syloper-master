# syloper-master

Para este proyecto, el entorno de desarollo funciona como una aplicación monolítica.

Para correr Syloper sin preocuparse de las instancias de manera automática, desde la raíz (syloper-master) debes utilizar docker.

# Docker
Instala el Docker en tu máquina.\
https://www.docker.com

Dirígete a la raíz, donde se encuentra el fichero `docker-compose.yml` y en consola ejecuta los siguientes comandos:

Para crear la base del proyecto Gatsby: esto se corre una sola vez para crear las depencias del docker-compose.
````bash
docker build -t gastby_image .
````

## Levantar las instancias
````bash
docker-compose up
````

