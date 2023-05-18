const express = require('express')
const cors = require('cors')

const PORT = 4400
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1> Integrated MongoDb with Express </h1>')
})

app.listen(PORT, () => {
    console.log(`MongoDB API Runnint at PORT: ${PORT}`)
})