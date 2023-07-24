const express = require('express');
const router = express.Router();
const { uploadFile, deleteFile, generatePublicUrl } = require('./controller')
const multer = require('multer')
const os = require('os')

router.post('/upload', multer({ dest: os.tmpdir() }).single('uploaded_file'), uploadFile);
router.delete('/:id/delete', deleteFile);
router.post('/:id/generatePublicUrl', generatePublicUrl);

module.exports = router;