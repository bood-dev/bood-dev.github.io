---
title: Cómo configurar Burp en un emulador Android
category:
  - how to
  - hacking
  - mobile
description: Tutorial para interceptar la comunicación de las aplicaciones móviles usando Burp.
date: 15 de Agosto de 2022
media: /blog/how-to-configure-burp-in-an-android-emulator/burp-suite-android.png
attribution_link: https://storyset.com/technology
attribution_text: Technology illustrations by Storyset
---
BurpSuite es una herramienta que utilizada para hacer pruebas de seguridad en aplicaciones web y móviles. En esta entrada veremos como configurarla para interceptar la comunicación de las aplicaciones móviles.

## Prerequistos
1. **Burp Suite** instalado (se puede descargar [aquí](https://portswigger.net/burp/releases))
2. **Android Studio** instalado (se puede descargar [aquí](https://developer.android.com/studio))

## Obtener el certificado de Burp Suite
Lo primero que realizaremos será obtener el certificado de **Burp Suite**, de esta manera podremos interceptar la comunicación que viaja a través de HTTPS sin problema.

Este certificado lo podemos generar de cualquiera de las siguientes maneras:

1. Abrimos **Burp Suite** y nos vamos a la opción _Proxy_ > _Options_ > _Import / export CA certificate_
![Burp screenshot](/blog/how-to-configure-burp-in-an-android-emulator/burp-generate-certificate.png)

En la pantalla del asistente seleccionamos la opción _Certificate in DER format_ y a continuación _Next_
![Burp ](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate.png)

Luego eligiremos el nombre del certificado y con esto ya tendremos el certificado exportado.
![Burp screenshot](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate-2.png)
![Burp screenshot](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate-3.png)

2. La segunda opción es generarlo desde el navegador incluido en **Burp Suite**, para esto nos vamos a la opción _Proxy_ > _Intercept_ > _Open browser_
![Burp screenshot](/blog/how-to-configure-burp-in-an-android-emulator/burp-generate-certificate-2.png)

En el navegador que se abre nos vamos a la dirección _http://burpsuite_ y luego hacemos click en _CA Certificate_
![Burp screenshot](/blog/how-to-configure-burp-in-an-android-emulator/burp-export-certificate-4.png)

~~Strikethrough~~
## Blockquotes
> Example of a very smart quote here
## Lists
Unordered:
- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
  - Ac tristique libero volutpat at
Ordered:
1. Lorem ipsum dolor sit amet [link text](http://dev.nodeca.com)
1. **BurpSuite** instalado (se puede descargar [aquí](https://portswigger.net/burp/releases) )
3. Integer molestie lorem at massa
## Code
Inline `code`
Block code "fences"
```js
var foo = function (bar) {
  return bar++
}
console.log(foo(5))
```
## Links
[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ 'title text!')
