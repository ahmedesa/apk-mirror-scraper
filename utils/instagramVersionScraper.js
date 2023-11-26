const axios = require("axios");
const cheerio = require("cheerio");
const Version = require("../models/version.model");

fetchInstagramVersions = async () => {
    try {
        const $ = await fetchDataFromAplMirror('/apk/instagram/instagram-instagram/');
        await processInstagramVersions($);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

async function processInstagramVersions($) {
    const versionElements = $('#primary > div.listWidget.p-relative').find('.appRow');

    await Promise.all(versionElements.map(async (index, element) => {
        const versionDetails = await extractVersionDetails($(element));
        console.log(versionDetails);
        await saveToMongoDB(versionDetails);
    }));
}


async function extractVersionDetails(element) {
    const versionId = extractVersionId(element.find('.appRowTitle a').text().trim());
    const releaseDate = element.find('.dateyear_utc').attr('data-utcdate');
    const variantsElement = element.find('.appRowVariantTag a');
    const variantsCount = variantsElement.text().trim().split(' ')[0];
    const variantLink = variantsElement.attr('href');

    const variants = await extractVariantsDetails(variantLink);

    return {
        versionId,
        releaseDate,
        variantsCount,
        variants,
    };
}

async function extractVariantsDetails(variantLink) {
    const $ = await fetchDataFromAplMirror(variantLink);
    const variantsTable = $('#downloads > div > div');
    const variants = [];

    variantsTable.find('.table-row').slice(1).each((index, versionElement) => {
        const variantId = $(versionElement).find('.colorLightBlack').first().text().trim();
        const architecture = $(versionElement).find('.table-cell:nth-child(2)').text().trim();
        const minVersion = extractMinAndroidVersion($(versionElement).find('.table-cell:nth-child(3)').text().trim());
        const screenDPI = $(versionElement).find('.table-cell:nth-child(4)').text().trim();

        variants.push({
            variantId,
            architecture,
            minVersion,
            screenDPI
        });
    });

    return variants;
}

async function fetchDataFromAplMirror(url) {
    try {
        const response = await axios.get('https://www.apkmirror.com' + url);

        return cheerio.load(response.data);
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
}

async function saveToMongoDB(versionData) {
    try {
        const version = new Version(versionData);

        await version.save();

    } catch (error) {
        console.error('Error saving to MongoDB:', error.message);
    }
}

function extractMinAndroidVersion(fullVersion) {
    const match = fullVersion.match(/\d+\.\d+/);
    return match ? match[0] : null;
}

function extractVersionId(fullVersion) {
    const match = fullVersion.match(/\d+(\.\d+)+/);
    return match ? match[0] : null;
}

module.exports = {fetchInstagramVersions};
