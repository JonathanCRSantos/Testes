const mongoose = require("mongoose")
const { Pet } = require("./Pet")
const { Responsavel } = require("./Responsavel")

const atendimentoSechema = new mongoose.Schema({
    tipo:{
        type: String,
        required: true,
    },
    responsavel:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Responsavel'
    }],
    descricao:{
        type: String,
        required: true,
    },
    data:{
        type: String,
        required: true,
    },
    hora:{
        type: String,
        required: true,
    },
    pet:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet'
    }]
})

const Atendimento = mongoose.model('Atendimento', atendimentoSechema)

module.exports = Atendimento