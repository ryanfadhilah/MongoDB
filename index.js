const express = require('express')
const cors = require('cors')

const PORT = 4400
const app = express()

app.use(cors())
app.use(express.json())

let { MongoClient, ObjectID } = require('mongodb')
let url = "mongodb+srv://ryanfadhilahacc:test1test2test3@cluster0.66ajksg.mongodb.net/?retryWrites=true&w=majority"

MongoClient.connect(url, (err, client) => {
    if (err) {
        console.log(err)
    }
    console.log(`connected to mongodb server 🦆🦆🦆`)
})

app.get('/', (req, res) => {
    res.status(200).send(`connection successs !!!`)
})

app.listen(PORT, () => { console.log(`API MONGO RUNNING AT PORT ${PORT}`) })