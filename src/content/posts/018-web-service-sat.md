---
title: Descargar Comprobantes Fiscales vía Web Service del SAT
slug: web-service-sat
seoTitle: 
description: El SAT liberó el servicio denominado Web Service, una nueva forma para descargar los comprobantes fiscales en grandes cantidades mediante solicitudes.
publishedDate: 2019-10-24
tags: ["Firma electrónica", "XML"]
categories: ["Comprobantes fiscales"]
img: https://todoconta.com/wp-content/uploads/2019/10/code-vsc-digital-electronic-web-coding.jpg
---


Debido a que el SAT detectó la existencia de aplicaciones que descargan de forma masiva de comprobantes fiscales, liberó el servicio Web Service para la descarga en grandes cantidades.




Mediante la **forma tradicional de descarga**, únicamente puedes descargar los primeros 500 CFDI para descarga del XML en la consulta que realices.




De hecho, desde tiempo atrás ya se tenía la posibilidad de descargar los comprobantes en un sólo movimiento mediante una solicitud (el tiempo de respuesta era de hasta 48 horas y vigencia de hasta 3 días).




Aun así, muchos usuarios seguían obteniéndolos de la forma tradicional mediante el uso de aplicaciones que descargan de forma automatizada pero de manera individual cada uno de los comprobantes fiscales.




Esto hacía que cada vez que accediéramos a un archivo, se hiciera una solicitud a los servidores del SAT y con ello lo saturábamos al ser cientos de miles en todo el país al mismo tiempo.





> Con el Web Service **puedes descargar hasta 200 mil registros por petición** y no existe limitante en cuanto al número de solicitudes siempre que no se descargue en mas de dos ocasiones un XML.




Proceso Web Service – SAT
-------------------------




![](https://s3-us-west-1.amazonaws.com/todoconta/2021/02/web-service-en-4-pasos.png)


El proceso para solicitar tus comprobantes fiscales vía Web Service es el siguiente:




2. **Autentificación con e.firma**  
El usuario realiza la autentificación utilizando su firma electrónica para generar un archivo con extensión .pfx, que no es mas que un archivo con un nivel de encriptación que permite incluir el Certificado y Llave privada en un solo archivo (algo así como una fusión de ambos).

6. **Realiza la solicitud de descarga**  
En este caso sólo puedes seleccionar si deseas emitidos o recibidos, también deberás definir el período por el que realizas la solicitud.

10. **Verificación de la solicitud**  
Una vez hemos hecho la solicitud lo que resta es esperar. El tiempo de espera puede demorar de 0\-240 horas (10 días) y esto va a depender de la cantidad de documentos a descargar, recuerda que ya son hasta 200 mil registros por petición.

14. **Descarga de la información**  
Una vez lista la solicitud, sólo queda descargar el archivo generado por la autoridad y que contiene todos los comprobantes fiscales. Este archivo tiene extensión .zip.




### Tipos de respuestas a las solicitudes




En relación a la solicitud vía Web Services






| Código | Mensaje |
| --- | --- |
| 5000 | Solicitud recibida con éxito |
| 5002 | Se agotó las solicitudes de por vida |
| 5004 | No se encontró la información |
| 5005 | Solicitud duplicada |
| 404 | Error no controlado |




En cuando a la verificación vía Web Service.






| Evento | Mensaje |
| --- | --- |
| 300 | Usuario no válido |
| 301 | XML mal formado |
| 302 | Sello mal formado |
| 303 | Sello no corresponde con RFC solicitante |
| 304 | Certificado revocado o caduco |
| 305 | Certificado inválido |
| 5000 | Solicitud recibida con éxito |
| 5004 | No se encontró la solicitud |




De momento no existe una herramienta disponible de forma pública para acceder a este servicio, lo que si existe es [documentación para desarrollar aplicaciones](https://www.sat.gob.mx/consulta/71663/conoce-los-servicios-especializados-de-validacion) que permitan generar solicitudes de descarga.




Entre las aplicaciones que se encuentran disponibles está [XMLSAT Premium](/producto/xmlsat-premium/), una aplicación que adicional a la descarga de comprobantes fiscales te permite aprovechar al máximo la información contenida en tus comprobantes fiscales.




### Conclusión




Esta alternativa del Web Service funciona perfecto ante fallas del portal para descargar los comprobantes fiscales de la forma tradicional, por lo que te recomiendo que vayas explorando algunas de las opciones ya disponibles.




Es muy probable, que eventualmente la autoridad vaya delegando este tipo de servicios ya que de esta forma libera la carga excesiva en el uso de sus servidores.



