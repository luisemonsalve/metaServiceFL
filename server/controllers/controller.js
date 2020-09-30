const controller = {};

controller.obtainMetaTags = (req, res) => {
    var id = req.query.id;

    const data = {
        title: id,
        descripción: "Prueba de descripción",
        url: "https://www.sciencefriday.com/",
        image: "https://encasa.parqueexplora.org/images/Historieta%20Melina/" + id + "_.png",
    }
    res.render('template', {
        data,
        urlToRedirect: '2;url=' + data.url
    })
}

module.exports = controller;