const controller = {};

controller.obtainMetaTags = (req, res) => {
    var id = req.query.id;
    if (!id) {
        id = 1;
    }

    const data = {
        id,
        title: "",
        description: 'Prueba de descripción',
        url: "",
        image: 'https://imagenes-generadas.s3.amazonaws.com/' + id,
    }
    res.render('template', {
        data,
        urlToRedirect: '2;url=' + data.url
    })
}

module.exports = controller;