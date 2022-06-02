# INFORMACIÓN DEL PROYECTO:

## Instrucciones:

 - [Visualizar proyecto](https://oconroldan.com)

 - Para entrar como propietario de la app: ADMIN - ADMIN

 - Para entrar como usuario de la app: USUARIO1 - USUARIO1



## Tennologías usadas:

- IDE: Visual Studio Code

- PLUGINS: Live Server (Para ejecutar html en vivo) / node-snippets (sintaxis y sugerencias para NodeJS) / Search node_modules (búsqueda de la carpeta node_modules) /  Markdown Preview (previsualización del readme)
  
- Front: HTML + CSS + JS + Bootstrap
  
- Back: NodeJS
  
- BBDD: PostgreSQL (DBeaver como cliente gráfico)

- HETZNER: Servidor

- NAMECHEAP: Dominio
  



### Estructura:

##### FRONT

- consultas.js: cargar de la base de la base de datos la información para la página de consultas.

- login.js: llamada al back para realizar el login y toda la lógica relacionada.

##### BACK

- controllers.js: funciones de las acciones que realizan las rutas. Todas las funciones interactúan directamente con la BBDD.

- db.js: conexión de tipo a la BBDD.

- routes.js: declaración de las rutas. Desde aquí se llama a controllers.js, que es dónde está toda la lógica de lo que ocurre en las rutas.
  
- .env: declaración de las variables globales de la aplicación.

- index.js: Desde donde arranca el backend.

- package-lock.json: librerrías del proyecto.

- package.json: Librerías para su funcionamiento y los scripts para la ejecución (nodemon: Dependencia de desarrollo que usamos para que se relanze constantemente el servidor / start: Inicialización normal).
  



### Librerías instaladas a NodeJS:

- body-parser: Para el envío de la información
  
- express: Para la ejecución de servidor
  
- pg: para uso de la bbdd (postgresql)
  
- cors: permite realizar llamadas de tipo cors

- dotenv: permite el uso de .env

- nodemon: permite relanzar el servidor cuando hay cambios



### Funciones clave de la aplicación

- const pool = new Pool(...): declaración de una conexión de tipo pool a PostgreSQL.

- pool.query: permite ejecutar queries a postgreSQL con una conexión de tipo pool.

- router.post y router.get: declaración de rutas de tipo post y get.




