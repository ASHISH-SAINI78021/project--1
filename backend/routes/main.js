const express = require("express");
const main = require("../controllers/main.js");
const router = express.Router();


router.get("/" , main.index);
router.post("/:id" , main.text);
router.get("/:id" , main.main);
router.delete("/:id" , main.delete);

module.exports = router;