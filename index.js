const express = require('express');
const bodyParser = require('body-parser');
const routers = require("./routes/");
const dbConnection = require("./config/db");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

dbConnection();

app.use(routers);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});