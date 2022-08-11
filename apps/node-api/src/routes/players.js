const { Router } = require("express");
const logger = require("../lib/logger");
const { getAllPlayers } = require("../services/players.service");

const router = Router();

router.get('/', (req, res) => {
  logger.info('Requested', { data: JSON.stringify({ url: req.url }) });
  const players = getAllPlayers();
  logger.info('Player received', { data: JSON.stringify(players) });
  return res.json({ status: 'ok', data: players });
});

module.exports = router;