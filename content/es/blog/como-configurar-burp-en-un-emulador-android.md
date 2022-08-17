---
title: Cómo configurar Burp en un emulador Android
tags:
  - how to
  - hacking
  - mobile
description: Tutorial para interceptar la comunicación de las aplicaciones móviles usando Burp Suite.
date: 17 de Agosto de 2022
media: /blog/how-to-configure-burp-in-an-android-emulator/burp-suite-android.png
attribution_link: https://storyset.com/technology
attribution_text: Technology illustrations by Storyset
reading_time: 3 minutos
---
BurpSuite es una herramienta utilizada para hacer pruebas de seguridad en aplicaciones web y móviles. En esta entrada veremos como configurarla para interceptar la comunicación de las aplicaciones móviles.

## Prerequistos
1. **Burp Suite** instalado (se puede descargar [aquí](https://portswigger.net/burp/releases))
2. **Android Studio** instalado (se puede descargar [aquí](https://developer.android.com/studio))

***

## Configurar Burp Suite
### Generación de certificado
Lo primero que realizaremos será obtener el certificado de **Burp Suite**, de esta manera podremos interceptar la comunicación que viaja a través de HTTPS sin problema.

Este certificado lo podemos generar de cualquiera de las siguientes dos maneras:

1. Abrimos **Burp Suite** y nos vamos a la opción _Proxy_ > _Options_ > _Import / export CA certificate_.
![Burp generate certificate](/blog/how-to-configure-burp-in-an-android-emulator/burp-generate-certificate.png "Burp generate certificate")

En la pantalla del asistente seleccionamos la opción _Certificate in DER format_ y a continuación _Next_.
![Burp export certificate](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate.png "Burp export certificate")

Luego eligiremos el nombre del certificado, en este caso _cacert_ y con esto ya tendremos el certificado exportado.
![Burp naming certificate](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate-2.png "Burp naming certificate")

2. La segunda opción es generarlo desde el navegador incluido en **Burp Suite**, para esto nos vamos a la opción _Proxy_ > _Intercept_ > _Open browser_ para abrir el navegador.
![Burp embedded browser](/blog/how-to-configure-burp-in-an-android-emulator/burp-generate-certificate-2.png "Burp open embedded browser")

En el navegador que se abre nos vamos a la dirección _http://burpsuite_ y luego hacemos click en _CA Certificate_ para descargarlo.
![Burp download certificate](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate-4.png "Burp download certificate")

Una vez que tenemos descargado nuestro certificado es necesario cambiar el formato de _.DER_ a _.CER_
```bash
mv cacert.der cacert.cer
``` 
### Configuración del Proxy Listener
Por último hay que dejar preparado **Burp Suite** para interceptar la comunicación, para esto nos vamos a la opción _Proxy_ > _Options_ y dentro de la sección **_Proxy Listeners_** hacemos click en _Add_. En la configuración de este nuevo _proxy listener_ usaremos los siguientes valores:
- Bind to port: **8082**
- Bind to address: **All interfaces**
![Burp new proxy listener](/blog/how-to-configure-burp-in-an-android-emulator/burp-intercept-1.png "Burp new proxy listener")

***

## Configurar emulador Android
Abrimos **Android Studio**, hacemos click en _Configure_ y luego en _AVD Manager_. En caso de que no cuentes con un dispositivo virtual puedes crear uno desde la opcion _Create Virtual Device..._, la configuración relevante utilizada en este tutorial es la siguiente:
- **API:** 30
- **Target:** Android 11.0 (Google APIs)
- **CPU/ABI:** x86
![Android AVD](/blog/how-to-configure-burp-in-an-android-emulator/android-studio-2.png)

Una vez que tengamos nuestro dispositivo listo nos dirigimos a la opción _Settings_ > _Security_ > _Encryption & Credentials_ > _Install a certificate (install certificates from SD card)_ > _CA Certificate_. 

En caso de recibir una advertencia haremos clcik en _Install anyway_ (este paso es necesario para poder interceptar la comunicación cifrada entre las aplicaciones móviles y sus servidores). A continuación procedermos a elegir nuestro certificado _cacert.cer_ generado en la primera parte de este tutorial, en caso de no tenerlo en el emulador simplemente arrastramos el archivo desde nuestra computadora al emulador y se instalará en la carpeta _Downloads_.
![Android Install Certificate](/blog/how-to-configure-burp-in-an-android-emulator/android-device-1.png "Android install certificate")
![Android Install Certificate](/blog/how-to-configure-burp-in-an-android-emulator/android-device-2.png "Android install certificate")

Acontinuación tenemos que obtener la IP del equipo que esta ejecutando **Burp Suite** (en este caso 192.168.0.7). Una vez obtenida la IP vamos a seleccionar la red WIFI que esta utilizando el emulador y haremos click en el icono de lápiz en la parte superior derecha para configurar el proxy. 
Aquí cambiaremos la configuración del proxy a _Manual_ y utilizaremos la IP y el puerto que seleccionamos durante el paso de _Configuración del proxy listener_ y guardamos.
![Android Configure Network](/blog/how-to-configure-burp-in-an-android-emulator/android-device-3.png "Android configure network")

## Configurar dispositivo físico Android
El procedimiento es idéntico a configurar un emulador, la única diferencia es que el dispositivo físico tiene que estar conectado en la misma red WIFI que la máquina que esté ejecutando **Burp Suite** ya sea en el tab de _Proxy_ o _Target_.

### Validar la configuración
Una vez realizados los pasos anteriores podemos abrir el navegador del dispositivo móvil o cualquier aplicación móvil que haga peticiones hacia un servidor externo y ver los resultados de la navegación en **Burp Suite**
![Android Burp connection](/blog/how-to-configure-burp-in-an-android-emulator/android-device-4.png "Android/Burp connection")

Con esto ya podemos empezar a analizar las peticiones de las aplicaciones que queremos probar en busqueda de fallas de seguridad.
