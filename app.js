const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const helmet = require("helmet")
const gDriveRouter = require('./app/api/gDrive/router');


dotenv.config()

const app = express()
const env = process.env.NODE_ENV
const port = env === 'production' ? process.env.APP_PRODUCTION_PORT : process.env.APP_DEV_PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

const URL = `/api/v1`


app.get('/', (req, res) => {
  res.send(`express js google drive api ⚡ server ${port}`)
})

app.use(`${URL}/gDrive`, gDriveRouter);


app.listen(port, () => console.log(`running ⚡ port: ${port}`))