const controller = {};

controller.obtainMetaTags = (req, res) => {
    var id = req.query.id;
    if (!id) {
        id = 1;
    }

    const data = {
        title: id,
        description: "Prueba de descripción",
        url: "https://www.sciencefriday.com/",
        image: "https://loremflickr.com/320/240/books?lock=" + id,
    }
    res.render('template', {
        data,
        urlToRedirect: '2;url=' + data.url
    })
}

module.exports = controller;