const mongoose = require("mongoose")

const petSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    tutor:{
        type: String,
        required: true
    },
    telefone:{
        type: String,
        required: true
    },
    endereco:{
        type: String,
        required: true
    }
})

const Pet = mongoose.model('Pet', petSchema)

module.exports = Pet