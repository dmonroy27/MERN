const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const { API_VERSION}= require("./constants")

const app = express()

const authRoutes = require("./router/auth.router")



app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())



app.use(express.static("./uploads"))


app.use(cors())

app.use(`/api/${API_VERSION}`, authRoutes)








module.exports = app