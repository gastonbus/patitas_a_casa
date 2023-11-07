# Patitas a Casa

Patitas a casa es una aplicación que fue creada para que las mascotas perdidas y sus dueños puedan encontrarse.

## Tabla de Contenidos

1. [Instalación](#instalación)
2. [Uso](#uso)
3. [Pantallas](#pantallas)
4. [Estilos y componentes](#estilos-y-componentes)
5. [Navegación](#navegación)
6. [Estados de la aplicación](#estados-de-la-aplicación)
7. [Base de datos](#base-de-datos)
8. [Gestión de usuarios](#gestión-de-usuarios)
9. [Gestión de peticiones](#gestión-de-peticiones)
10. [Formularios](#formularios)
11. [Versiones](#versiones)

## Instalación

Una vez clonado el repositorio, hay que posicionarse en la carpeta del proyecto y se debe ejecutar:  
`npm install`

## Uso

Para poder ver la aplicación funcionando en un dispositivo móvil es necesario descargar e instalar la aplicación **Expo Go** desde [aquí](https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share).

Ejecutar el comando `npm start`

En la consola aparecerá un código QR que debemos leer desde la aplicación Expo Go.

## Pantallas

- **Login:** Es un formulario de ingreso a la aplicación mediante email y contraseña. Este formulario está hecho manualmente, sin ayuda de ninguna librería. Si bien tiene una pantalla para mostrar errores, ésta es muy sencilla y no funciona para todos los casos de error.
- **Register:** Es muy similar al Login, pero en lugar de disparar una acción de autenticación dispara un alta de usuario.
- **Home:** Es la "landing page" luego de que el usuario supera la etapa de autenticación. Simplemente le da la bienvenida y le permite acceder a ver las categorías.
- **Categories:** Muetra una lista de categorías con la posibilidad de acceder a cada una de ellas.
- **Pets:** Muestra un listado de todas las mascotas registradas/encontradas para una determinada categoría y permite acceder a los detalles de cada una de ellas.
- **PetDetails:** Es la pantalla que le sigue a la anterior y en la cual el usuario puede ver información más detallada de una determinada mascota. También le permite acceder a la pantalla PetLoc. También en esta pantalla se muestran los datos del usuario que cargó la publicación y se lo puede contactar directamente con un botón para llamar. Estos datos se encuentran fijos en la parte inferior de la pantalla, mientras que los datos de la mascota están contenidas dentro de un Scroll.
- **PetLoc:** Permite al usuario visualizar la ubicación exacta en la que fue encontrada la mascota que seleccionó.
- **PostPet:** Consiste en un formulario con varios campos para poder publicar una mascota encontrada. Este formulario está hecho con ayuda de la librería React Hook Form. Únicamente se valida que los campos hayan sido completados. También permite al usuario tomar una foto con la cámara de su dispositivo o seleccionarla de la galería. También da la opción de capturar las coordenadas geográficas del celular en ese momento, para poder agregarlas también como un dato valioso a la hora de publicar una mascota.
- **Profile:** Muestra al usuario la información de perfil y le permite cambiar su imagen tomando una foto con la cámara o seleccionando una de su galería. También puede (y se le solicita que lo haga) agregar/modificar su nombre completo y su número de teléfono. Estos datos serán usados a la hora de publicar una mascota para que, si el dueño aparece, pueda contactar al rescatista.

## Estilos y componentes

La aplicación utiliza tanto componentes de **React Native** como de **React Native Paper**.

## Navegación

La navegación entre pantallas es manejada por medio de la librería **React Navigation**. Al acceder a la aplicación, si el usuario no está autenticado, se muestra la pantalla de Login, desde la cual se puede acceder a la pantalla de Register si no está registrado. Una vez superado con éxito el login, la aplicación muestra 3 secciones principales a las que puede accederse mediante un TabNav en la parte inferior de la pantalla. Cada una de estas secciones consiste en un Stack de pantallas:

- **Stack Home:** Permite navegar entre las pantallas _Home_, _Categories_, _Pets_, _PetDetails_ y _PetLoc_. La finalidad es mostrarle al usuario todas las mascotas encontradas por categoría.
- **Stack Post:** Permite acceder a _PostPet_. Si bien es una única pantalla, se utilizó un stack para permiter el agregado de más screens en esta sección más adelante.
- **Stack Profile:** Permite acceder a _Profile_. Si bien es una única pantalla, se utilizó un stack para permiter el agregado de más screens en esta sección más adelante.

## Estados de la aplicación

Los estados son manejados por medio del concepto Redux con ayuda de la librería **React Redux**.

## Base de datos

La aplicación utiliza como base de datos el servicio **Realtime Database** de Firebase. Esta base de datos contiene información de mascotas ficticias y con imágenes tomadas de la web sin fines comerciales.

## Gestión de usuarios

El acceso de los usuarios es gestionado mediante el servicio **Authentication** de Firebase y su información es almacenada en el servicio **Realtime Database**, también de Firebase.

## Gestión de peticiones

Las peticiones son realizadas a través **RTK Query**, de **Redux Toolkit**.

## Formularios

Los formularios de Registro y Login fueron desarrollados en forma manual. El formulario de carga de mascotas perdidas utiliza la librería **React Hook Form**.

## Versiones

### Versión 1.0.0 (08/11/2023)

**Lanzamiento Inicial:** Esta versión reune las características mínimas de funcionalidad para cumplir con su propósito.
