const controller = {};

controller.obtainMetaTags = (req, res) => {

    const data = {
        title: "Prueba de titulo",
        descripción: "Prueba de descripción",
        url: "https://www.sciencefriday.com/",
        image: "https://www.sciencefriday.com/wp-content/uploads/2016/01/Science-Friday-logo.png"
    }
    res.render('template', {
        data
    })
}

module.exports = controller;