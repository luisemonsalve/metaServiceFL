const app = require('./server/app');

async function start() {
    app.listen(app.get('port'), () => {
        console.log(`Listen on port ${app.get('port')}`)
    })
}

start();