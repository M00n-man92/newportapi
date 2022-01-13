const mongoose = require('mongoose')
const schema = new mongoose.Schema({
   
        dataType: { type: String },
        name: { type: String },

        discription: { type: String },
        img: [{ location:{type: String} }],
        link:{type:String}



    }, { timestamps: true }
)
const Data = mongoose.model('data', schema)
module.exports = Data;