const mongoose = require("mongoose");

const {Schema} = mongoose;

const versionSchema = new Schema({
    versionId: String,
    releaseDate: Date,
    variantsCount : Number,
    variants: [{
        variantId: String,
        architecture: String,
        minVersion: String,
        screenDPI: String
    }]
});

const Version = mongoose.model('Version', versionSchema);

module.exports = Version;