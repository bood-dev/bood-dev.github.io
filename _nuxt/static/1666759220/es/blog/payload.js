__NUXT_JSONP__("/es/blog", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{posts:[{slug:"como-configurar-burp-en-un-emulador-android",description:"Tutorial para interceptar la comunicación de las aplicaciones móviles usando Burp Suite.",title:"Cómo configurar Burp en un emulador Android",tags:["how to","hacking","mobile"],date:"17 de Agosto de 2022",media:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-suite-android.png",attribution_link:"https:\u002F\u002Fstoryset.com\u002Ftechnology",attribution_text:"Technology illustrations by Storyset",reading_time:"3 minutos",toc:[{id:B,depth:q,text:C},{id:D,depth:q,text:E},{id:F,depth:t,text:G},{id:H,depth:t,text:I},{id:J,depth:q,text:K},{id:L,depth:q,text:M},{id:N,depth:t,text:O}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"BurpSuite es una herramienta utilizada para hacer pruebas de seguridad en aplicaciones web y móviles. En esta entrada veremos como configurarla para interceptar la comunicación de las aplicaciones móviles."}]},{type:a,value:c},{type:b,tag:r,props:{id:B},children:[{type:b,tag:h,props:{href:"#prerequistos",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:P},{type:b,tag:h,props:{href:"https:\u002F\u002Fportswigger.net\u002Fburp\u002Freleases",rel:[v,w,x],target:y},children:[{type:a,value:Q}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:S}]},{type:a,value:P},{type:b,tag:h,props:{href:"https:\u002F\u002Fdeveloper.android.com\u002Fstudio",rel:[v,w,x],target:y},children:[{type:a,value:Q}]},{type:a,value:R}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:T,props:{},children:[]},{type:a,value:c},{type:b,tag:r,props:{id:D},children:[{type:b,tag:h,props:{href:"#configurar-burp-suite",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:z,props:{id:F},children:[{type:b,tag:h,props:{href:"#generaci%C3%B3n-de-certificado",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Lo primero que realizaremos será obtener el certificado de "},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:", de esta manera podremos interceptar la comunicación que viaja a través de HTTPS sin problema."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Este certificado lo podemos generar de cualquiera de las siguientes dos maneras:"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:U},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:" y nos vamos a la opción "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:V}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:"Import \u002F export CA certificate"}]},{type:a,value:A}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:W,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-generate-certificate.png",title:W},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"En la pantalla del asistente seleccionamos la opción "},{type:b,tag:d,props:{},children:[{type:a,value:"Certificate in DER format"}]},{type:a,value:" y a continuación "},{type:b,tag:d,props:{},children:[{type:a,value:"Next"}]},{type:a,value:X},{type:b,tag:g,props:{alt:Y,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-export-certificate.png",title:Y},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Luego eligiremos el nombre del certificado, en este caso "},{type:b,tag:d,props:{},children:[{type:a,value:"cacert"}]},{type:a,value:" y con esto ya tendremos el certificado exportado.\r\n"},{type:b,tag:g,props:{alt:Z,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-export-certificate-2.png",title:Z},children:[]}]},{type:a,value:c},{type:b,tag:u,props:{start:q},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"La segunda opción es generarlo desde el navegador incluido en "},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:", para esto nos vamos a la opción "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:"Intercept"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:"Open browser"}]},{type:a,value:" para abrir el navegador."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:"Burp embedded browser",src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-generate-certificate-2.png",title:"Burp open embedded browser"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"En el navegador que se abre nos vamos a la dirección "},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{href:_,rel:[v,w,x],target:y},children:[{type:a,value:_}]}]},{type:a,value:" y luego hacemos click en "},{type:b,tag:d,props:{},children:[{type:a,value:$}]},{type:a,value:" para descargarlo.\r\n"},{type:b,tag:g,props:{alt:aa,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-export-certificate-4.png",title:aa},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Una vez que tenemos descargado nuestro certificado es necesario cambiar el formato de "},{type:b,tag:d,props:{},children:[{type:a,value:".DER"}]},{type:a,value:" a "},{type:b,tag:d,props:{},children:[{type:a,value:".CER"}]}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:k,props:{className:["token","function"]},children:[{type:a,value:"mv"}]},{type:a,value:" cacert.der cacert.cer\n"}]}]}]},{type:a,value:c},{type:b,tag:z,props:{id:H},children:[{type:b,tag:h,props:{href:"#configuraci%C3%B3n-del-proxy-listener",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Por último hay que dejar preparado "},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:" para interceptar la comunicación, para esto nos vamos a la opción "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:V}]},{type:a,value:" y dentro de la sección "},{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"Proxy Listeners"}]}]},{type:a,value:" hacemos click en "},{type:b,tag:d,props:{},children:[{type:a,value:"Add"}]},{type:a,value:". En la configuración de este nuevo "},{type:b,tag:d,props:{},children:[{type:a,value:"proxy listener"}]},{type:a,value:" usaremos los siguientes valores:"}]},{type:a,value:c},{type:b,tag:ab,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Bind to port: "},{type:b,tag:f,props:{},children:[{type:a,value:"8082"}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Bind to address: "},{type:b,tag:f,props:{},children:[{type:a,value:"All interfaces"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:ac,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fburp-intercept-1.png",title:ac},children:[]}]},{type:a,value:c},{type:b,tag:T,props:{},children:[]},{type:a,value:c},{type:b,tag:r,props:{id:J},children:[{type:b,tag:h,props:{href:"#configurar-emulador-android",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:U},{type:b,tag:f,props:{},children:[{type:a,value:S}]},{type:a,value:", hacemos click en "},{type:b,tag:d,props:{},children:[{type:a,value:"Configure"}]},{type:a,value:" y luego en "},{type:b,tag:d,props:{},children:[{type:a,value:"AVD Manager"}]},{type:a,value:". En caso de que no cuentes con un dispositivo virtual puedes crear uno desde la opcion "},{type:b,tag:d,props:{},children:[{type:a,value:"Create Virtual Device..."}]},{type:a,value:", la configuración relevante utilizada en este tutorial es la siguiente:"}]},{type:a,value:c},{type:b,tag:ab,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"API:"}]},{type:a,value:" 30"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Target:"}]},{type:a,value:" Android 11.0 (Google APIs)"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"CPU\u002FABI:"}]},{type:a,value:" x86"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:g,props:{alt:"Android AVD",src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fandroid-studio-2.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Una vez que tengamos nuestro dispositivo listo nos dirigimos a la opción "},{type:b,tag:d,props:{},children:[{type:a,value:"Settings"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:"Security"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:"Encryption & Credentials"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:"Install a certificate (install certificates from SD card)"}]},{type:a,value:j},{type:b,tag:d,props:{},children:[{type:a,value:$}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"En caso de recibir una advertencia haremos clcik en "},{type:b,tag:d,props:{},children:[{type:a,value:"Install anyway"}]},{type:a,value:" (este paso es necesario para poder interceptar la comunicación cifrada entre las aplicaciones móviles y sus servidores). A continuación procedermos a elegir nuestro certificado "},{type:b,tag:d,props:{},children:[{type:a,value:"cacert.cer"}]},{type:a,value:" generado en la primera parte de este tutorial, en caso de no tenerlo en el emulador simplemente arrastramos el archivo desde nuestra computadora al emulador y se instalará en la carpeta "},{type:b,tag:d,props:{},children:[{type:a,value:"Downloads"}]},{type:a,value:X},{type:b,tag:g,props:{alt:ad,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fandroid-device-1.png",title:ae},children:[]},{type:a,value:af},{type:b,tag:g,props:{alt:ad,src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fandroid-device-2.png",title:ae},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Acontinuación tenemos que obtener la IP del equipo que esta ejecutando "},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:" (en este caso 192.168.0.7). Una vez obtenida la IP vamos a seleccionar la red WIFI que esta utilizando el emulador y haremos click en el icono de lápiz en la parte superior derecha para configurar el proxy.\r\nAquí cambiaremos la configuración del proxy a "},{type:b,tag:d,props:{},children:[{type:a,value:"Manual"}]},{type:a,value:" y utilizaremos la IP y el puerto que seleccionamos durante el paso de "},{type:b,tag:d,props:{},children:[{type:a,value:"Configuración del proxy listener"}]},{type:a,value:" y guardamos.\r\n"},{type:b,tag:g,props:{alt:"Android Configure Network",src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fandroid-device-3.png",title:"Android configure network"},children:[]}]},{type:a,value:c},{type:b,tag:r,props:{id:L},children:[{type:b,tag:h,props:{href:"#configurar-dispositivo-f%C3%ADsico-android",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"El procedimiento es idéntico a configurar un emulador, la única diferencia es que el dispositivo físico tiene que estar conectado en la misma red WIFI que la máquina que esté ejecutando "},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:" ya sea en el tab de "},{type:b,tag:d,props:{},children:[{type:a,value:s}]},{type:a,value:" o "},{type:b,tag:d,props:{},children:[{type:a,value:"Target"}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:z,props:{id:N},children:[{type:b,tag:h,props:{href:"#validar-la-configuraci%C3%B3n",ariaHidden:m,tabIndex:n},children:[{type:b,tag:k,props:{className:[o,p]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Una vez realizados los pasos anteriores podemos abrir el navegador del dispositivo móvil o cualquier aplicación móvil que haga peticiones hacia un servidor externo y ver los resultados de la navegación en "},{type:b,tag:f,props:{},children:[{type:a,value:l}]},{type:a,value:af},{type:b,tag:g,props:{alt:"Android Burp connection",src:"\u002Fblog\u002Fhow-to-configure-burp-in-an-android-emulator\u002Fandroid-device-4.png",title:"Android\u002FBurp connection"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Con esto ya podemos empezar a analizar las peticiones de las aplicaciones que queremos probar en busqueda de fallas de seguridad."}]}]},dir:"\u002Fes\u002Fblog",path:"\u002Fes\u002Fblog\u002Fcomo-configurar-burp-en-un-emulador-android",extension:".md",createdAt:"2022-01-02T23:34:29.919Z",updatedAt:"2022-08-17T04:33:03.222Z"}]}],fetch:{},mutations:void 0}}("text","element","\n","em","p","strong","img","a","li"," \u003E ","span","Burp Suite","true",-1,"icon","icon-link",2,"h2","Proxy",3,"ol","nofollow","noopener","noreferrer","_blank","h3",".","prerequistos","Prerequistos","configurar-burp-suite","Configurar Burp Suite","generación-de-certificado","Generación de certificado","configuración-del-proxy-listener","Configuración del Proxy Listener","configurar-emulador-android","Configurar emulador Android","configurar-dispositivo-físico-android","Configurar dispositivo físico Android","validar-la-configuración","Validar la configuración"," instalado (se puede descargar ","aquí",")","Android Studio","hr","Abrimos ","Options","Burp generate certificate",".\r\n","Burp export certificate","Burp naming certificate","http:\u002F\u002Fburpsuite","CA Certificate","Burp download certificate","ul","Burp new proxy listener","Android Install Certificate","Android install certificate","\r\n")));