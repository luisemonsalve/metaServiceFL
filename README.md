# Servicio de backend para agregar Metatags en un enlace para compartirlo en redes

## General

- Para iniciar usamos el comando **npm install**
- Para iniciar el servidor podemos usar **npm start** o **npm run dev** para correrlo en un servidor de desarrollo
- Por defecto está corriendo en un ambiente local en el puerto 4000
- El endpoind '/' recive un id como query param, por ejemplo **/'?id=1601477277811**

## Estructura

Se esta usando un servidor creado a partir de **express**, 
se define que en la ruta base retorna un archivo html con los meta tags correspondientes, 
y la configuración de estos metatags se define a partir de un query param llamado **id** que indica el id de la imagen que se quiere mostrar en la publicación.

## Configuración

Tener presente que se debe configurar el tipo archivos que va a retornar, en este caso estamos renderizando una plantilla ejs con unas variables pre definidas.
<br>
Para configurar los textos que se muestras solo basta con ir a */controllers/controller.js*, y buscar la constante **data**.

```javascript 
    var id = req.query.id;
    if (!id) {
        id = 1601477277811; //Id de la imagen por defecto
    }

    const data = {
        id,
        title: "Título", //Aquí va el título de la entrada
        description: 'Descripción', //Aquí va la descripción
        url: "https://fiestadellibroylacultura.com/", // Url final a donde redirige despues de abrir
        image: 'https://imagenes-generadas.s3.amazonaws.com/' + id, 
        //Link del servidor donde se esta guradando las imagenes que se van a compartir
    }
    res.render('template', {
        data,
        urlToRedirect: '2;url=' + data.url
    })

```
Para usarlo solo basta con unir el id de la imagen a el enlace donde se despliegue el servidor,
actualmente esta desplegado en [https://backend-fl.herokuapp.com/]("https://backend-fl.herokuapp.com/"), para problarlo se puede compartir el siguiente enlace en redes sociales https://backend-fl.herokuapp.com/?id=1601477277811
