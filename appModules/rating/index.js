const { PATH_TO_RATTING_FILE, WEIGHT } = require("./config");
const makeRatingFile = require("./rating-file");
const { createRating, updateRating } = require("./calculations");

module.exports = {
    PATH_TO_RATTING_FILE,
    WEIGHT,
    makeRatingFile,
    createRating,
    updateRating
}