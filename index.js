/////////////////////////////////////
// Install SETUP
const express = require('express')
const mongoose = require('mongoose')
const Customer = require('./models/customer_model')
const app = express()
PORT = 3000




/////////////////////////////////////
// Middleware
app.use(express.json())
// BONUS kalau mau update pake form (usualy JSON)
app.use(express.urlencoded({ extended: false }))


/////////////////////////////////////
// ROUTES 30:32

// Post
app.post('/customer', async (req, res) => {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

// Get ALL
app.get('/customer', async (req, res) => {
    try {
        const customer = await Customer.find({})
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Get ID
app.get('/customer/:id', async (req, res) => {
    try {
        const { id } = req.params
        const customer = await Customer.findById(id)
        res.status(200).json(customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// UPDATE
app.put('/customer/:id', async (req, res) => {
    try {
        const { id } = req.params
        const customer = await Customer.findByIdAndUpdate(id, req.body)
        // jika data Customer tidak di update
        if (!customer) {
            return res.status(404).json({ message: `cannot find product with ID: ${id}` })
        }

        const updated_customer = await Customer.findById(id)
        res.status(200).json(updated_customer)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// DELETE


/////////////////////////////////////
// API SETUP
mongoose.set("strictQuery", false)
mongoose
    .connect("mongodb+srv://ryanfadhilahacc:IBM@customer.ggbhi1y.mongodb.net/customer_database?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected to mongoDB 🦆🦆🦆")
        app.listen(PORT, () => {
            console.log(`Running at PORT : ${PORT}`)
        })
    }).catch((error) => {
        console.log(error)
    })
