const express = require('express');
const authRouter = express.Router();

const multer = require("multer");
const upload = multer();

const {
    regsiter
} = require('../controllers/auth.controller');


authRouter.post('/register',upload.none(),regsiter);

module.exports = authRouter;