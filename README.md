# Movie Service

Aplicación demo legacy funcional con un backend REST en Spring Boot y un catálogo Angular. Está preparada como punto de partida para una futura modernización con AWS Transform; AWS Transform no se ejecuta en este proyecto.

## Requisitos

- JDK 8 (el `pom.xml` fija source y target en Java 8)
- Maven 3.6+
- Node.js 18+ y npm

## Backend

```bash
cd aws-appconfig-java-sample-maven
mvn spring-boot:run
```

El servicio queda en `http://localhost:8080`.

```bash
curl http://localhost:8080/api/movies
curl http://localhost:8080/api/movies/1
curl 'http://localhost:8080/api/movies/search?title=matrix'
```

Ejecutar pruebas: `mvn test`.

## Frontend

En otra terminal:

```bash
cd movie-ui
npm install
npm start
```

Abrir `http://localhost:4200`. El frontend consume el backend en el puerto 8080. Ejecutar build con `npm run build` y pruebas con `npm test`.

## Estructura

- `aws-appconfig-java-sample-maven/`: API REST Java 8 / Spring Boot 2.7 / Maven.
- `movie-ui/`: aplicación Angular 17 llamada `movie-ui`.
- `LEGACY-VERSION.md`: versiones legacy intencionales.

No se usan bases de datos, credenciales, secretos ni recursos de AWS.
