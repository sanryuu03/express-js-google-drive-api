const express = require('express');
const router = express.Router();
const { uploadFile, deleteFile, generatePublicUrl, multiFile } = require('./controller')
const multer = require('multer')
const os = require('os')

const singleUpload = multer({ dest: os.tmpdir() }).single('uploaded_file')
const multipleUpload = multer({ dest: os.tmpdir() }).fields([{ name: 'multiple_file' }])

router.post('/upload', singleUpload, uploadFile);
router.delete('/:id/delete', deleteFile);
router.post('/:id/generatePublicUrl', generatePublicUrl);
router.post('/uploadMultiple', multipleUpload, multiFile);

module.exports = router;