const { parseBody, mimeTypes, staticFile } = require("../appModules/http-utils");
const { getData, getRandomGame, endpoints } = require("../appModules/api");
const { PATH_TO_RATTING_FILE, WEIGHT, makeRatingFile } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoints.games);
    await makeRatingFile(PATH_TO_RATTING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController;