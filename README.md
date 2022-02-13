# Syloper

## Para correr el backend:

Desde la raíz del proyecto, donde se encuentra el archivo "docker-compose.
  yml" correr:

- `docker-compose build` para construir la imagen
- `docker-compose up` para levantarla

Dado que el backend corre en una instancia de Docker, no necesitas instalar las dependecias ni levantar MongoDB porque se instalan en la imagen de forma automática.

### Database

El contenedor instanciará datos dummy en la aplicación. A medida que se 
agrege lógica, se pueden complementar los datos en url:

`backend-syloper/database/data`

## Para correr el front, por ahora:

- Dirígete a la carpeta `front-syloper` y corre `npm start` (recuerda instalar las dependencias antes)


## Postman

Entrego un Postman que deberá ser completado cada vez que se libere un nuevo 
endpoint desde el backend, ya que servirá como ejemplo para el equipo de front.
