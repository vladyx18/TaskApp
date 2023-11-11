# Manual Técnico
#### Tecnologías utilizadas

[![N|Solid](https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yarn-logo-kitten.svg/320px-Yarn-logo-kitten.svg.png)](https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yarn-logo-kitten.svg/320px-Yarn-logo-kitten.svg.png)
- Se utilizó Yarn como manejador de paquetes.
- Next.JS y TailwindCss para el Front-End.
- Apoyado de DaisyUI.
- Se utilizó MongoDB como base de datos local.
- Redux como manejador de estado global.

## Installation
Una vez descargado el repositorio debemos de iniciar el proyecto por medio de Yarn y descargamos las dependencias:
En caso de necesitar instalar Yarn en su computadora, entrar a este link -> https://classic.yarnpkg.com/latest.msi

```sh
yarn install
```

Una vez teniendo las dependencias podemos hacer uso del script:

```sh
yarn dev
```
Con este comando iniciaremos nuestro servidor local por defecto en el puerto localhost:3000.

Una vez realizada esta parte, ya estamos listos!.
## MongoDB

Se utilizó MongoDB en formato local.
Para su instalación se necesita descargar el community server desde la página oficial y ejecutar él .exe en nuestro equipo. 

Link directo al Community Server: https://www.mongodb.com/try/download/community
Link de Guia de instalación oficial de Community Server: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/

Una vez instalado correctamente nuestro mongo en nuestro computador, estaremos listos para instalar nuestro GUI para nuestra base de datos.

Link directo al compass: https://www.mongodb.com/products/tools/compass
Link de Guía de instalación oficial de Compass: https://www.mongodb.com/docs/compass/current/install/

Una vez tengamos instalado ambos en nuestro ordenador, solo nos queda abrir nuestra terminal y ejecutar el comando *"mongod"*, el cual iniciara en nuestra terminal el servicio de MongoDB, para que así, podamos establecer la conexión con la base de datos desde el Compass.

Una vez estando adentro de nuestra GUI, necesitamos seguir los siguientes pasos:
- Se deben utilizar los JSON files para importar las colecciones a su base de datos!, estos estarán disponibles en la carpeta backupDB dentro del repositorio.
- Para eso vamos a crear una nueva base de datos desde nuestra GUI llamada "TaskAppDB".
- Una vez creada la base de datos crearemos 2 colecciones:
 -- auths
 -- tasks
- al tener ambas colecciones creadas, entraremos en cada una y en el botón de upload, vamos a subir los datos de las colecciones que estarán disponibles en una carpeta llamada backupDB en el repositorio.
- Una vez importado los backUp de cada colección exitosamente, estaremos listos para ya poder utilizar la app.

Para más información nos podemos apoyar de la documentacion oficial de MongoDB:
 - Crear una base de datos desde Compass: https://www.mongodb.com/basics/create-database
 - Importar archivos backup para restaurar las colecciones: https://www.mongodb.com/docs/compass/current/import-export/

# App en Ejecución
Una vez teniendo el app en ejecución, para acceder usaremos el usuario y contraseña por defecto:
email: admin@mail.com
contraseña: admin123

---
# Manual de usuario
Bienvenido Usuario a TaskApp, tu aplicación para manejo de tareas.
La aplicación se divide en tres secciones importantes.
- Inicio de Sesión
- Creador de tareas
- Editor de tarea

# Inicio de Sesión
Esta es la página principal de la aplicación, donde usted como usuario, puede iniciar sesión para acceder a la aplicación del manejador de tareas.

Pasos para iniciar sesión en la aplicación:
- Presionar el botón "Ingresa"
- Luego, ingresa tu usuario y contraseña. (Por defecto se utiliza admin@mail.com | admin123)
- Y por último presiona, inicia sesión.

Una vez terminado este proceso, estaríamos entrando a la segunda parte del aplicativo.

# Creador de tareas
Esta sección es la segunda del aplicativo.
En donde podemos observar como podemos empezar a usar la aplicación como tal.

### Crear una nueva tarea:
- Para empezar a crear una tarea, debemos de pulsar el botón "Crear Tarea".
Esto hará que la aplicación despliegue una ventana flotante en la cual podemos ingresar la información para crear una tarea. *(información que se debe ingresar: Título y Descripción)*.
- Una vez hemos ingresado la información necesaria, podemos presionar el botón "Ingresar", esto permitirá que la aplicación cree una nueva tarea. *(Al momento de crear la tarea, la ventana flotante se cerrará automáticamente y usted como usuario podrá observar como la tarea ya está creada en su pantalla.)*

Al momento de tener nuestras tareas, si deseamos poder editar la información, eliminarla o completarla, necesitaremos acceder al tercer apartado del aplicativo "Editor de tarea", este lo podemos navegar al momento de interactuar con un click con la tarjeta que deseamos manejar.

# Editor de tarea
Dentro del editor de tareas podremos observar una interfaz bastante sencilla en donde está cumple de manera rápida con los diferentes controles de una tarea. *(Editar, Completar, Eliminar)*

### Editar tarea:
- Al acceder a esta interfaz tendremos un recuadro con un formulario similar al de la creación de tareas, donde se debe ingresar Título o Descripción que queremos editar. *(Cabe recalcar, que en este punto, puede ser uno de ellos o ambos a la hora de editar y que al momento de acceder, usted como usuario podrá ver que ese formulario se autocompleta con el Título y Descripción existente en la tarea...)*
- Una vez tendamos los valores que queremos editar, presionaremos al botón "Guardar" donde este hará la función de editar y una vez realizado, lo redireccionará automáticamente en la pantalla de creador de tareas, para así usted puede observar que la edición de la tarea fue exitosa.

### Eliminar tarea:
Al momento de acceder a una tarea, en caso de que ya no necesitemos de ella, podemos simplemente presionar el botón *"Eliminar"* donde este desplegara un mensaje de alerta, en donde le preguntara a usted como usuario si realmente desea eliminar la tarea, en caso de seleccionar: 
- "Sí": será redireccionado automáticamente a la página de creador de tareas y verá que la tarea fue eliminada con éxito.
- "No": no pasará absolutamente nada y podrá seguir navegando en el aplicativo.

### Completar tarea:
Al momento de acceder a una tarea, en caso de que ya la hayamos completado, podemos presionar el botón *"Completar"* en donde este, de igual manera que el de eliminar, le desplegara una alerta de confirmación, en caso de que usted seleccione:
- "Sí": será redireccionado automáticamente a la página de creador de tareas y verá que la tarea fue completada con éxito.
- "No": no pasará absolutamente nada y podrá seguir navegando en el aplicativo.

# Información adicional:
Se debe de hacer noción a usted como usuario, que al momento de que usted vea una tarea completada y entra a ella, ahora en esta interfaz usted solo podrá hacer uso de *"Regresar a la pantalla de creador de tareas"* y *"Eliminar la tarea."*

### Cambio de tema (claro / oscuro)
En la plataforma, usted como usuario en la pagina de creación de tareas, usted podra observar que en la barra de navegación, hay un icono de una Luna *(cuando esta en el tema claro)* y un Sol *(Cuando esta en el tema oscuro)*. Por lo tanto, este icono le permitira seleccionar entre si desea visualizar la plataforma en tonos claros o tonos oscuros.

### Cierre de sesión
Una vez hayamos terminado de utilizar la aplicación, podemos hacer click en la pequeña ilustración en la barra de navegación superior en la parte derecha. Esta fotografía, al hacer click, desplegara un pequeño menú en el cual aparecerá la opción de *"Cerrar Sesión"* donde esta función abandonara la aplicación regresando a la pantalla de Inicio de Sesión.

Espero que este aplicativo le sirva de mucha ayuda y que haya cumplido sus necesidades.
