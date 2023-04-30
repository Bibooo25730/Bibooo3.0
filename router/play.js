const express = require('express');
const Router = express.Router();
const play = require("../server/playdesc");
Router.get("/Stardesc",play.Stardesc);

module.exports = Router