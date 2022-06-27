//require and Router
const express = require("express");
const router = express.Router();

//hub for routes
router.use(require('./voteRoutes'));
router.use(require("./candidateRoutes"));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

//export
module.exports = router;