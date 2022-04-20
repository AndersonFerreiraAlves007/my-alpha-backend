const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')

const PORT = 3333

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// routes

app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`)
})
