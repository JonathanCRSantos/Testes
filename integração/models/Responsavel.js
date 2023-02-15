const mongoose = require("mongoose")

const responsavelSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    cargo:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
})

const Responsavel = mongoose.model('Responsavel', responsavelSchema)

module.exports = Responsavel