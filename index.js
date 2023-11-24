const express = require('express');
const dbConnection = require("./config/db");
const app = express();
const port = process.env.PORT || 3000;
const routers = require("./routes/");

dbConnection();

app.use(routers);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});