const controller = {};

controller.obtainMetaTags = (req, res) => {
    var id = req.query.id;
    const data = {
        title: "Prueba de " + id,
        descripción: "Prueba de descripción",
        url: "https://www.sciencefriday.com/",
        image: "https://www.sciencefriday.com/wp-content/uploads/2016/01/Science-Friday-logo.png"
    }
    res.render('template', {
        data
    })
}

module.exports = controller;