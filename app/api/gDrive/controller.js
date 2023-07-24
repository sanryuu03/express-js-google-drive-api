const { google } = require("googleapis");
const path = require("path");
const fs = require('fs');

const KEYFILEPATH = path.join(__dirname, "../../../credential.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const drive = google.drive({
  version: 'v3',
  auth
})

const uploadFile = async (req, res) => {
  const { file } = req
  try {
    const filePath = file.path
    const originalExt = req.file.originalname.split('.')[req.file.originalname.split('.').length - 1]
    const filename = req.file.filename + '.' + originalExt
    const { data } = await drive.files.create({
      requestBody: {
        name: filename,
        mimeType: file.mimetype,
        parents: ['1e2fqB71u_mA-gHBdcB6_WPS6YWl4fdH0']
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(filePath),
      },
      fields: 'id, name'
    })

    const umpanBalik = {
      error: false,
      message: 'success',
      data
    }
    return res.status(201).json({ umpanBalik })
  } catch (err) {
    const umpanBalik = {
      error: true,
      message: err.message,
      data: 'kosong'
    }
    return res.status(500).json({ umpanBalik: umpanBalik || `Internal server error` })
  }
}

module.exports = {
  uploadFile
}