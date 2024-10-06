
# Prueba tecnica Ecnament


- Esta prueba técnica consiste en el desarrollo de una aplicación utilizando Angular y Ionic. La aplicación tiene como objetivo recibir un número ingresado por el usuario y desplegar diversos resultados basados en ese número, incluyendo múltiplos de 3, 5 y 7, y guardar las peticiones y resultados en Firebase.






## Instalacion

- Clonar proyecto 

```
   git clone https://github.com/Atzel73/prueba-ecnament.git 

```
- Instalar Angular CLI

```
   npm install -g @angular/cli

```

- Instalar Firebase CLI

```
 npm install -g firebase-tools

```
- Instalar dependencias

```
 npm install

```

- Ejecutar en modo desarrollador/ en localhost

```
ionic serve

```

## Requisitos del Ejercicio
- Recibir un Parámetro Numérico: La aplicación debe permitir al usuario ingresar un número.
- Despliegue de Números: Mostrar todos los números entre 0 y el número ingresado.
- Encontrar Múltiplos: Identificar los múltiplos de 3, 5 y 7 dentro del rango especificado.
- Despliegue Visual:
    Los múltiplos de 3 deben mostrarse en VERDE.
    Los múltiplos de 5 deben mostrarse en ROJO.
    Los múltiplos de 7 deben mostrarse en AZUL.
- Si un número es múltiplo de más de uno, debe aparecer en el     color del menor múltiplo.
- Todos los múltiplos correspondientes deben desplegarse.
- Si un número no tiene múltiplos, debe mostrarse en NEGRO.
- Almacenamiento en Base de Datos: La aplicación debe guardar     tanto la petición del usuario como los resultados en Firebase.
## Requisitos del Ejercicio
- Recibir un Parámetro Numérico: La aplicación debe permitir al usuario ingresar un número.
- Despliegue de Números: Mostrar todos los números entre 0 y el número ingresado.
- Encontrar Múltiplos: Identificar los múltiplos de 3, 5 y 7 dentro del rango especificado.
- Despliegue Visual:
    Los múltiplos de 3 deben mostrarse en VERDE.
    Los múltiplos de 5 deben mostrarse en ROJO.
    Los múltiplos de 7 deben mostrarse en AZUL.
- Si un número es múltiplo de más de uno, debe aparecer en el     color del menor múltiplo.
- Todos los múltiplos correspondientes deben desplegarse.
- Si un número no tiene múltiplos, debe mostrarse en NEGRO.
- Almacenamiento en Base de Datos: La aplicación debe guardar     tanto la petición del usuario como los resultados en Firebase.
# Tecnologias usadas

```
 Angular: Como framework.
 Ionic: Para el diseño de la interfaz de usuario.
 TypeScript: Para la lógica de la aplicación y funciones de obtención de números pares y almacenamiento en Firebase.
 Firebase: Para el almacenamiento de datos en tiempo real y para el hosting de la aplicación.
 Git/ Github: Para control de versiones. 
```
# Ejemplos de Entrada y Salida


#### Numero ingresado: 21
 ```
 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21
Múltiplos 3 y 7
21 [3] (3, 6, 9, 12, 15, 18, 21 en VERDE)
21 [7] (7, 14, 21 en AZUL)
21 [5] (5, 10, 15, 20 en ROJO)
 ```

 #### Numero ingresado: 15
 ```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
15 [3] (3, 6, 9, 12, 15 en VERDE)
15 [7] (7, 14 en AZUL)
15 [5] (5, 10, 15 en ROJO)

 ```

 
# Deploy del proyecto

Pasos para generar version de produccion del proyecto 

```bash
  ng build --prod

  Este comando genera la carpeta www, la cual contiene los archivos optimizados para produccion. 
```
   
## Instalar Firebase CLI

```
npm install -g firebase-tools
```

## Iniciar sesion en Firebase

```
firebase login
```

## Iniciar proyecto en Firebase

```
firebase init
```
## Iniciar deploy en Firebase Hosting

```
firebase deploy
```
## Hosting de la aplicacion

```
https://prueba-ecnament.web.app/
```
## Repositorio en Github

```
https://github.com/Atzel73/prueba-ecnament.git
```


Ademas, se le otorgaron permisos de editor a reclutamiento@emt.dev en la consola de Firebase del proyecto. 
