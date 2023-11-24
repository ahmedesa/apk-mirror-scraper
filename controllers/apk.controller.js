const Apk = require('../models/Apk');

module.exports.index = async (req, res, next) => {
    try {
        let appointment = await Apk.find();

        return res.status(200).json({
            data: appointment,
        });
    } catch (e) {
        res.status(e.code ? e.code : 500).json({
            message: e.message,
            code: e.code,
            errors: e.errors ? e.errors : null
        });
    }
};