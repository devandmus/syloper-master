# syloper-master

Para este proyecto, el entorno de desarollo funciona como una aplicación monolítica.

Para correr Syloper sin preocuparse de las instancias de manera automática, debes controlarlo desde la raíz con npm.

---

__Dependecias globales antes de empezar__

## Node
Descarga la versión LTS en\
https://nodejs.org/es/

## Gatsby CLI
Una vez instalado Node y NPM:
```bash
npm install -g gatsby-cli
```

# Comandos
Todos los comandos a continuación se deben ejecutar desde la raíz para controlar ambos entornos.

Para instalar todas las dependencias:
```bash
npm install
```

Para levantar el monolítico en una consola:
```bash
npm start
```

Para levantar únicamente el front
```bash
npm start:f
```

Para levantar únicamente el backend
```bash
npm start:b
```

Para limpiar todas las dependencias y caché
```bash
npm clean
```
