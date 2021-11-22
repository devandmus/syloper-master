#Backend Syloper

Las configuraciones generales se encuentran el la ruta `/config` y el archivo de settings contienen todos los YAML para entornos

Docker build image
```bash
docker build -t syl .
```

Docker Run
```bash
docker run -p 4080:4080 -v $(pwd):/app/project -it syl
```
