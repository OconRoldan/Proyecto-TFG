const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const routes = require('./src/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT);
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`SERVIDOR EJECUTÁNDOSE CORRECTAMENTE EN EL PUERTO ${app.get('port')}`)
})