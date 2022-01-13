const mongoose = require('mongoose')
const schema = new mongoose.Schema({
   
        name: { type: String },
        subject: { type: String },

        email: { type: String },
        msg: { type: String },
        



    }, { timestamps: true }
)
const Data = mongoose.model('contact', schema)
module.exports = Data;