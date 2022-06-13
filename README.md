🛠 En construccion.
##### En este momento no esta inplementada la integracion continua por ende no esta corriendo en githup-pages
# `YARD-SALE`
### Description
* YARD-SALE es una e-commerce con las funcionalidades base tipicas de una tienda virtual. Algunas de sus funcionalidades son:
	- Carrito de compra.
	- Manejo de rutas, tales como; home, login, password-recovery, send-email, new-password, entre otras.
	- Acumulacion de pedidos y suma del total.
	- Añadir, borrar y conteo de los productos añadidos.
	- Diseño responsivo.
* YARD-SALE maneja las siguientes tecnologias principales, react, webpack, babel, sass y varias dependencias.
* YARD-SALE contiene archivos de configuracion de webpack y babel.
* YARD-SALE consume un API de prueba para renderizar los productos.
* YARD-SALE es una aplicacion de multiples rutas montadas con riack-route.
## Scrips 
- npm run start  -> Arranca el proyecto en desarrollo
- npm run build  -> Crea el compilado de produccion
##### Nota: si no funciona el build agragar las rutas al html manualmente. Puede ser por los puntos de las rutas
## Dependencias de desarrollo 
- react            	 			-> Instala react
- react-dom        	 			-> Instala react dom
- react-dom/client        -> Ahora este remplaza a react-dom
- react-router-dom        -> Dependencia para manejo de rutas en la aplicacion
- webpack									-> wepack
- webpack-cli        			-> 
- webpack-dev-server 			-> Servidor de desarrollo
- html-webpack-plugin			-> Para poder manipular el html desde webpack, modificarlo y moverlo a dist
- html-loader				 			-> Loader de html para que trate webpack estos formatos
- babel-loader       			-> Para poder trabajar babel con webpack
- @babel/preset-env  		 	-> Compila las versiones ecma6 de para adelante alparecer
- @babel/preset-react		 	-> Compila	jsx y sintax de react
- @babel/core        		 	-> Todo el core de babel
- css-loader         		 	-> Loader de css para que trate webpack estos formatos
- mini-css-extract-plugin	-> Minificador de css 
- sass               		 	-> sass
- sass-loader        		 	-> Loader de sass para que trate webpack estos formatos
- axios                   -> Para manejar mejor las llamadas apis
- copy-webpack-plugin     -> Nos ayudará a copiar los archivos de la carpeta /public a la carpeta de nuestro proyecto compilado