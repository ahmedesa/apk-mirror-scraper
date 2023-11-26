const {fetchInstagramVersions} = require("./utils/instagramVersionScraper");
const dbConnection = require("./config/db");

dbConnection();

fetchInstagramVersions();
