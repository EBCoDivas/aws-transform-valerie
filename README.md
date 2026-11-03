# Movie Service

Movie Service es una aplicación web modernizada para explorar un catálogo de películas. Conserva el catálogo, la búsqueda por título, los detalles de cada película y la lista de favoritos.

## Estado actual

- Backend: Java 21 y Spring Boot 3.2.12.
- Frontend: React 18 con TypeScript y Vite.
- API REST de películas con datos mock en memoria.
- Sin base de datos, credenciales, secretos ni despliegues en AWS.

## Requisitos

- JDK 21
- Maven 3.6+
- Node.js 18+ y npm

## Backend

```bash
cd aws-appconfig-java-sample-maven
mvn spring-boot:run
```

El servicio queda disponible en `http://localhost:8080`.

Endpoints principales:

```bash
curl http://localhost:8080/api/movies
curl http://localhost:8080/api/movies/1
curl 'http://localhost:8080/api/movies/search?title=matrix'
```

Validación ejecutada:

```bash
mvn clean verify
```

Resultado: 5/5 pruebas exitosas.

## Frontend

En otra terminal:

```bash
cd movie-ui
npm install
npm run dev
```

Abrir `http://localhost:5173`. El frontend consume el backend en el puerto 8080.

Validación ejecutada:

```bash
npm run build
```

Resultado: build exitoso, 25/25 escenarios de lógica de negocio y 4/4 comparaciones visuales aprobadas. La comparación visual obtuvo una diferencia de `0.0000`.

## Tecnologías

- Backend: Java 21, Spring Boot 3.2.12, Maven.
- Frontend: React 18, TypeScript, Vite.
- Pruebas: Maven Verify y validaciones automatizadas de lógica y comparación visual.

## Estructura

- `aws-appconfig-java-sample-maven/`: API REST del Movie Service.
- `movie-ui/`: aplicación React 18 con TypeScript y Vite.
- `LEGACY-VERSION.md`: documentación de las versiones originales del proyecto; se conserva sin modificar.

AWS Transform no se ejecuta como parte de los comandos anteriores.
