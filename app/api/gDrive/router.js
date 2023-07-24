const express = require('express');
const router = express.Router();
const { uploadFile } = require('./controller')
const multer = require('multer')
const os = require('os')

router.post('/upload', multer({ dest: os.tmpdir() }).single('image'), uploadFile);

module.exports = router;