const fs = require("fs").promises;
const { PATH_TO_RATTING_FILE, WEIGHT, makeRatingFile, createRating, updateRating  } = require("../appModules/rating");
const { getData, getRandomGame, endpoints } = require("../appModules/api");

async function gameRouteController(res) {
  try {
    const ratingFile = await fs.readFile(PATH_TO_RATTING_FILE);
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data); // Получаем случайную игру
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch (error) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
} 

  module.exports = gameRouteController;