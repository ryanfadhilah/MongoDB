const mongoose = require('mongoose')
// const { ObjectId } = require('mongodb') 


const customerSchema = mongoose.Schema(
    {
        // _id: {
        //     type: ObjectId,
        //     required: [true, "please enter employe id"]
        // },
        name: {
            type: String,
            required: [true, "please enter customer -> employee name"],
        },
        adress: {
            type: String,
            required: [true, "please input customer -> employee adress"]
        },
        birth_date: {
            type: Date,
            required: [true, "please input customer -> employee birth date"]
        }
    },
    {
        timestamps: true
    }
)


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer; 