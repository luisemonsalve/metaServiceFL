const app = require('./server/app');


port = 3000

async function start() {
    app.listen(port, () => {
        console.log(`Listen on port ${port}`)
    })
}

start();