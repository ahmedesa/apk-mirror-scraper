const mongoose = require("mongoose");
const URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}`;

console.log(URI);
const dbConnection = () =>
    mongoose
        .connect(URI)
        .then((conn) =>
            console.log(`Connected By Data Base ${conn.connection.host}`)
        )
        .catch((err) => console.error(`You have an error: ${err}`));

module.exports = dbConnection;