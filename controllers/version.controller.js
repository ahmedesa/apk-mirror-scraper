const Version = require('../models/version.model');

module.exports.index = async (req, res, next) => {
    try {
        let version = await Version.find();

        return res.status(200).json({
            data: version,
        });
    } catch (e) {
        res.status(e.code ? e.code : 500).json({
            message: e.message,
            code: e.code,
            errors: e.errors ? e.errors : null
        });
    }
};

module.exports.show = async (req, res, next) => {
    const versionId = req.params.id;

    try {
        const version = await Version.findOne({versionId});

        if (!version) {
            return res.status(404).json({error: 'Version not found'});
        }

        return res.status(200).json({
            data: version,
        });

    } catch (e) {
        res.status(e.code ? e.code : 500).json({
            message: e.message,
            code: e.code,
            errors: e.errors ? e.errors : null
        });
    }
};


module.exports.delete = async (req, res, next) => {
    const versionId = req.params.id;

    try {
        const deletedVersion = await Version.findOneAndDelete({versionId});

        if (!deletedVersion) {
            return res.status(404).json({error: 'Version not found'});
        }

        return res.status(204).json({});

    } catch (e) {
        res.status(e.code ? e.code : 500).json({
            message: e.message,
            code: e.code,
            errors: e.errors ? e.errors : null
        });
    }
};


module.exports.update = async (req, res, next) => {
    const versionId = req.params.id;
    const reqBody = req.body;

    try {
        const updatedVersion = await Version.findOneAndUpdate(
            {versionId},
            reqBody,
            {
                new: true
            }
        );

        if (!updatedVersion) {
            return res.status(404).json({error: 'Version not found'});
        }

        return res.status(200).json({
            data: updatedVersion,
        });

    } catch (e) {
        res.status(e.code ? e.code : 500).json({
            message: e.message,
            code: e.code,
            errors: e.errors ? e.errors : null
        });
    }
};