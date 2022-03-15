# Syloper

## Antes de empezar:
- Instala Docker en tu máquina
- Instala lerna & dependencias de paquetes:

```bash
npm i && npx lerna bootstrap --hoist
```

Proyecto unificado: para correr todas las instancias

````bash
npm start
````

## Limpiar instancia

CONTROL + C para únciamente la ejecución de lerna. Para bajar el docker, 
utilizar:

```bash
docker-compose down
```

## Postman

Postman endpoints:\
https://www.postman.com/planetary-rocket-631449/workspace/1989630f-d66e-4ee6-855b-e013196aa1a9/overview

## Base de datos:

Para poblar la base de datos (el proyecto debe estar instanciado):

```bash
npm run hydrate
```
