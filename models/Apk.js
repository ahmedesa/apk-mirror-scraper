const mongoose = require("mongoose");

const {Schema} = mongoose;

const apkSchema = new Schema({
    versionId: String,
    releaseDate: Date,
    variantId: String,
    architecture: String,
    minAndroidVersion: String,
    dpi: String,
});

const Apk = mongoose.model('Apk', apkSchema);

module.exports = Apk;