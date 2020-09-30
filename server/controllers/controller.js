const controller = {};

controller.obtainMetaTags = (req, res) => {
    var id = req.query.id;
    if (!id) {
        id = 1601477277811; //Id de la imagen por defecto
    }

    const data = {
        id,
        title: "Título", //Aquí va el título de la entrada
        description: 'Descripción', //Aquí va la descripción
        url: "https://fiestadellibroylacultura.com/", // Url final a donde redirige despues de abrir
        image: 'https://imagenes-generadas.s3.amazonaws.com/' + id, //Link del servidor donde se esta guradando las imagenes que se van a compartir
    }
    res.render('template', {
        data,
        urlToRedirect: '2;url=' + data.url
    })
}

module.exports = controller;