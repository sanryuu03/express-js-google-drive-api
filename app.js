const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const helmet = require("helmet")
const gDriveRouter = require('./app/api/gDrive/router');


dotenv.config()

const app = express()
const port = process.env.PORT ?? "3000"

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