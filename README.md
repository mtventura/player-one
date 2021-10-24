# Player One e-commerce
![cover](./public/Cover.png)

Player one es un e-commerce que se centra en el mundo de los videojuegos y lo relacionado a ellos. 

![demo](./public/Demo.gif) 

## **Cómo utilizar**
1. Clonar el repositorio de GitHub.
2. Instalar las dependencias del proyecto a través del comando `npm install`
3. Configurar las variables de entorno en un archivo ***.env*** con la información de acceso a la base de datos de Firebase, utilizando como modelo el archivo ***.env.example***. 
4. Ejecutar a través del comando `npm run` para que comienze a correr en el puerto 3000 del localhost.

## **Dependencias**

### [**Styled-components**](https://styled-components.com) 
Permite simplificar la estética de los componentes, debido a que permite recibir parámetros en los archivos de estilos, para así no tener que generar muchas clases distintas, dependiendo de cómo uno quiere que se vea.

### [**Material-ui/icons**](https://www.npmjs.com/package/@material-ui/icons)
Posee una gran variedad de íconos que cubren la gran mayoría que se utilizan dentro de la aplicación. 

### [**Firebase**](https://firebase.google.com/?hl=es)
Se utiliza Firebase como base de datos del proyecto. La misma permite hacer una autenticación compatible con cuentas de correo electrónico y contraseñas, autenticación telefónica, acceso mediante Google, Twitter, Facebook y GitHub.

### [**React-Router**](https://reactrouter.com)
Permite que se creen links a los distintos componentes sin tener que recargar el sitio, para que el flujo sea más dinámico.

## **Distribución del código** 

En el root del proyecto se deben encontrar los archivos *package.json*, *.env*, *.gitignore* y *README.md*
Luego en ese mismo nivel se encontrarán las carpetas *public* y *src*

### **public**
Esta carpeta contiene el *cover*, el *favicon* y el archivo *index.html*

### **src**
Esta carpeta contiene los archivos *App.js*, *App.css*, *index.js* e *index.css*. Además se hallará en ella las carpetas *assets*, *components*, *helpers*, *context* y *services*

- assets: Contiene las imagenes que se utilizan dentro de la aplicación. 
- components: Contiene los distintos components y containers que se muestran en la aplicación. 
- context: Contiene los diferentes contextos que se utilizan en la aplicación. 
    - CartContext: Contiene todos los métodos con la lógica para manejar un carrito. Agregar, eliminar, vaciar el carrito, calcular el total, etc. 
    - MenuContext: Contiene los métodos para recuperar la información para armar el menú. 
    - NotificationContext: Contiene los métodos para poder mostrar las notificaciones. 
    - UserContext: Contiene los métodos que permiten iniciar sesión, cerrar sesión y crear un usuario. 
- helpers: Contiene la clase currencyHelper que permite mostrar los montos como dinero. 
- services: Contiene la clase firebase que contiene todos los métodos para recuperar la información de la base de datos. Grabar una órden, recuperar los artículos, etc. 

