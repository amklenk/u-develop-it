//require and Router
const express = require("express");
const router = express.Router();

//hub for routes
router.use(require("./candidateRoutes"));
router.use(require('./partyRoutes'));

//export
module.exports = router;