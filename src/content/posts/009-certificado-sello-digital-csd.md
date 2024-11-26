---
title: Certificado de sello digital
slug: certificado-sello-digital-csd
seoTitle: 
description: Tanto personas físicas como morales debemos contar con un certificado de sello digital para emitir comprobantes fiscales.
publishedDate: 2013-12-26
tags: ["SAT", "CSD", "Certifica", "Servicios"]
categories: ["Comprobantes fiscales"]
img: https://todoconta.com/wp-content/uploads/2019/10/code-vsc-digital-electronic-web-coding.jpg
---


Antes de emitir comprobantes fiscales, tanto personas físicas como morales deben contar con un Certificado de Sello Digital, mismo que se obtiene a partir de la Firma Electrónica del contribuyente.




Este certificado se obtiene de forma gratuita y se genera a través de la aplicación llamada Certifica, misma que se descarga en la página de Internet del SAT.




Tanto el certificado de sello digital como la firma electrónica cuentan con un archivo .KEY y un archivo .CER **importante no confundirlos**.




Adicional a la aplicación [Certifica](https://www.sat.gob.mx/aplicacion/16660/genera-y-descarga-tus-archivos-a-traves-de-la-aplicacion-certifica) debemos contar con la consola Java instalada en nuestro equipo.





https://youtu.be/du3A\_4Za8\-8



Procedimiento
-------------




### Descargar la consola Java




Para descargar la consola Java debemos ingresar a la página de Internet [java.com/es](https://java.com/es).




Y posteriormente damos clic en “Descarga gratuita de Java”, luego damos clic en “Aceptar e iniciar descarga gratuita”.




Damos clic en “Instalar”.




Una vez finalice la descarga comenzará la ejecución de la instalación de forma automática.




Finalizando este proceso damos clic en “Cerrar”.




Bien, ahora procedemos con la descarga de la aplicación Certifica.




### Descargar la aplicación Certifica




Para ello ingresamos a la página de Internet de SAT [sat.gob.mx](http://sat.gob.mx/).




Nos dirigimos a la sección “Lo más buscado” y damos clic la opción Solicitud de certificados de sello digital.




En caso de que no se encuentre ya en esta sección, nos dirigimos al menú Información \> e.firma (antes firma electrónica) posteriormente damos clic en “Cómo renovar tu e.firma”. En este apartado encontraremos un enlace para descargarlo.




Procedemos a descargar la aplicación Certifica. Para ello se nos presentarán dos versiones: 32 bits o 64 bits dependiendo de la arquitectura de nuestro equipo.




Para saber qué tipo de arquitectura es la que tenemos, nos dirigimos al Explorador de archivos de Windows, damos clic derecho sobre el elemento “Equipo” y posteriormente damos clic en “Propiedades”. En este apartado se nos mostrará el tipo de arquitectura que tenemos.




En mi caso seleccioné la opción “Certifica (32 bits)” ya que a pesar de tener mi sistema a 64, la aplicación no se ejecuta correctamente.




Damos clic en “Guardar como” para seleccionar la ubicación.




En caso de que tu navegador no te da opción, lo más seguro es que el archivo se guarde en la carpeta de “Descargas”.




Procedemos a generar nuestro Certificado de Sello Digital. Abrimos nuestra aplicación.




### Generar un Certificado de Sello Digital




Damos clic en la opción Solicitud de Certificado de Sello Digital (CSD).




El primer paso será validar certificado vigente. Damos clic en Examinar y buscamos nuestro archivo .CER correspondiente a nuestra Firma Electrónica vigente.




Para efectos prácticos he colocado mi Firma Electrónica en el escritorio. Lo seleccionamos y damos clic en “Abrir” y posteriormente en “Siguiente”.




Procedemos con la captura de información y el establecimiento de una contraseña. Para ello, ingresamos el nombre la sucursal o Unidad. Este dato puede puede ser definido por el usuario, en mi caso pondré la palabra “Despacho”.




En ciertos casos, como en el que usan los equipos para el control volumétrico de las gasolineras, las empresas nos llegan a solicitar que este en este campo se ingresan ciertos valores determinados.




Ingresamos una contraseña y la confirmamos, **ES IMPORTANTE NO OLVIDAR ESTE DATO** ya que lo utilizaremos al momento de ingresarlo en nuestra aplicación de emisión de comprobantes fiscales.




Para no complicarnos podemos utilizar la misma contraseña de la Firma Electrónica.




Posteriormente damos clic en “Agregar”.




Vemos como pasa automáticamente a la sección “Solicitudes realizadas”. Como en nuestro caso vamos a solicitar un certificado en esta ocasión damos clic en “Siguiente”.




El tercer paso consiste en la Generación de Claves.




Aquí no tenemos que realizar nada más que sólo mover el cursor del en distintas direcciones para que el procedimiento sea completado.




Luego tendremos que firmar y guardar la solicitud.




Para ello, damos clic en Seleccionar archivo, y buscamos ahora nuestro archivo con extensión .KEY correspondiente a nuestra Firma Electrónica vigente e ingresamos la Contraseña de la clave privada.




Damos clic en “**Firmar y Guardar**”.




La aplicación nos pedirá que seleccionemos un directorio donde se guardará la solicitud de sellos. Por defecto te mostrará la última ubicación utilizada. Podemos dejarla ahí o podemos moverla al escritorio y evitar confusiones en el futuro. Y damos clic en “Guardar”.




### Envío de solicitud de CSD




Para concluir el proceso de generación de Certificados de sello digital, debemos enviar el archivo de solicitud (un archivo con extensión .sdg) a través de la página de Internet del SAT, utilizando el servicio CertiSAT WEB.




Podemos dar clic directamente en el enlace que nos da la propia aplicación o también podemos ingresar a través de la página del SAT.




Para ingresar necesitaremos nuestra Firma Electrónica o nuestra Contraseña para ingresar la solicitud. Una vez dentro de la aplicación seleccionamos la opción “**Envío de solicitud de certificados de Sello Digital**”.




Damos clic en Seleccionar Archivo y buscamos la ubicación de nuestro recién archivo creado con extensión .SDG correspondiente a nuestra solicitud.




Y damos clic en Enviar requerimiento.




### Recuperar certificados




Para recuperar nuestro certificado tenemos varias opciones. La más rápida y sin salirnos de la aplicación es en la sección “**Recuperación de certificados**”.




Podemos recuperarlo por RFC o por número de serie.




La opción “Recuperación por RFC”, nos pide que definir dos criterios: El RFC y si queremos todos los certificados expedidos o únicamente el último y damos clic en “Buscar”.




Por último, ya que tengamos los resultados de todos los sellos que hemos generado (el primero de arriba hacía abajo será el último generado) damos clic en “Guardar como” para seleccionar la misma ubicación de la carpeta de la solicitud.




No siempre es inmediata la activación, ya que en ocasiones el SAT los reconoce hasta 72 horas después de su generación. Si en este momento intentas generar una factura y te marca error, no te preocupes sólo hay que esperar.




Recordemos que al igual de la Firma Electrónica los certificados tienen un duración de 4 años.




Motivos por los que pueden dejar sin efecto sus certificados
------------------------------------------------------------




Con el pasar del tiempo, la autoridad ha venido reforzando sus medidas de seguridad para asegurarse de que los contribuyentes evadan la obligación de pagar impuestos.




Una de ellas es mediante la implementación de una serie de reglas, mecanismos y procedimientos empezando por el tema de la emisión de comprobantes fiscales.




En relación a este tema, una de las primeras acciones que toma la autoridad es la de suspenderte o dejar sin efectos tus certificados de sello digital.




Empezó siendo reglas de [Resolución Miscelánea Fiscal](/resolucion-miscelanea-fiscal-importancia/) para después escalarlo a un nivel superior quedando establecido en el artículo 17\-H del Código Fiscal de la Federación.




En este artículo se mencionan las situaciones por las que la autoridad podría dejarte sin efectos, algunas un tanto obvias, como por ejemplo, el [fallecimiento del contribuyente](/.com/fallecimiento-contribuyente/).




Sin embargo, de las situaciones en las que podríamos prestar atención para evitar caer, ya sea por descuido o por querer pasarnos de listos están establecidas en la fracción X, incisos de la a) a la d) y son:




2. Cuando se omitan la presentación de tres o más declaraciones periódicas consecutivas o seis no consecutivas, previo requerimiento de la autoridad.

6. Durante el procedimiento administrativo de ejecución no localicen al contribuyente o éste desaparezca.

10. Durante las facultades de comprobación, detecten que el contribuyente no puede ser localizado; éste desaparezca durante el procedimiento, o bien se tenga conocimiento de que los comprobantes fiscales emitidos se utilizaron para amparar operaciones inexistentes, simuladas o ilícitas.

14. Aun sin ejercer sus facultades de comprobación, detecten la existencia de una o más infracciones previstas en los artículos 79, 81 y 83 de este ordenamiento, y la conducta sea realizada por el contribuyente titular del certificado.




### ¿Qué hacer si cancelaron mis certificados de sello digital?




Si tu certificado de sello digital ha sido cancelado (el SAT lo dejó sin efectos) de entrada no podrás emitir comprobantes fiscales hasta que regularices esa situación.




Tampoco podrás solicitar nuevos, ya que serán cancelados inmediatamente.




Para ello debemos estar al pendiente si hemos recibido alguna notificación a través de nuestro Buzón Tributario puesto que será a través de esta nueva forma de notificación.




### ¿Cuándo surte efecto la cancelación?




Dentro de los cinco días siguiente a partir de la fecha en que nos sea notificando que tenemos un documento pendiente dentro de nuestro Buzón Tributario.




Por lo que tenemos que presentar una aclaración en la página de dicho buzón. Este trámite se debe presentar inmediatamente se hayan dejado sin efectos el o los certificados de sello digital para la emisión de comprobantes.




Por esa razón deberás ir directo al [portal del SAT para subsanar las irregularidades](https://www.sat.gob.mx/tramites/67400/aclaracion-para-subsanar-las-irregularidades-detectadas-o-desvirtuar-la-causa-por-la-que-se-dejo-sin-efectos-su-certificado-de-sello-digital) detectadas o desvirtuar la causa por la que se dejó sin efectos su Certificado de Sello Digital.




Una vez la autoridad nos resuelva favorablemente a la petición, podemos solicitar la autorización de la emisión de nuevo certificado utilizando el procedimiento antes descrito.






---




Como podemos observar, la autoridad busca cubrir todos los flancos para evitar que los contribuyentes evadan impuestos mediante la implementación de esquemas complicados de operación.




Y uno de sus primeros ataques o por lo menos de los más letales es sin duda dejar sin efectos los certificados.




Así que ahora ya sabemos cómo generar un certificado, cómo podemos estar mas al pendiente respecto si caemos en una situación en la que nos lo puedan suspender y qué podemos hacer al respecto.



