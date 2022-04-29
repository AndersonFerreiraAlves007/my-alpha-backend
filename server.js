require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const userRouter = require('./routes/user')
const { SERVER_PORT, API_VERSION, HOST_FRONTEND } = require('./utils/constants')

const PORT = SERVER_PORT

const app = express()

app.get('/', (req, res) => {
  res.send(`Api trabalho react versão: ${API_VERSION}!`)
})

app.use(cors({
  origin: [HOST_FRONTEND],
  credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server listen in port: ${PORT}`)
})
