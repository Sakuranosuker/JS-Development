const express = require('express');
const aiContoller = require("../controllers/ai.controller");

const router = express.Router();
// Controller -- but not created here. It just tells which contoller will run.

router.get("/get-response",aiContoller.getResponse)


module.exports = router;