# Repositorio para "CHALLENGE FULL STACK -JavaScript"

## Servidor
El servidor esta hecho usando *Node*, *Typescript*, *Express* y *Sequelize*.
```bash
	npm install
	cd api
	npm run build
	npm run start
```

## Cliente
El cliente esta hecho con *React*, *Vite*, *Wouter*, *WindiCSS*, *React Hook Form* y *useSWR*.
```bash
	npm install
	cd app
	npm run build
	npm run start
```


## Desarrollo

### Base de datos
Para la base de datos en desarrollo hay un archivo de docker compose que permite correr una imagen de postgres para desarrollo. Es necesario tener Docker instalado.

```bash
	npm install
	cd api
	npm run dev:db
	npm run dev
```
```bash
	cd app
	npm run dev
```
