const express = require('express');
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.getAllUser);
router.get("/search/:id", API.getUserByID);
router.post("/signup", API.createUser);
router.patch("/profile/:id", API.updateUserById);
router.delete("/profile/:id", API.deleteUser);

module.exports = router;