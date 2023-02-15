const Atendimento = require("../models/Atendimento")
const Pet = require("../models/Pet")
const Responsavel = require("../models/Responsavel")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const atendimento = {
    create: async (req, res) => {
        try {
            const dados = { tipo, descricao, data, hora, responsavel, pet } = req.body
            const response = await Atendimento.create(dados)
            res.status(200).json({msg:"Atendimento criado com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    read: async (req, res) => {
        try {
            const response = await Atendimento.find().populate('responsavel pet')
            res.status(200).json({response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    readOne: async (req, res) => {
        try {
            const id = req.params.id
            const response = await Atendimento.findById(id)
            if (!response) {
                return res.status(400).json({msg:"Atendimento não econtrado!"})
            }
            res.status(200).json({response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const intermediary = await Atendimento.findById(id)
            if (!intermediary) {
                return res.status(400).json({msg:"Atendimento não econtrado!"})
            }
            const response = await Atendimento.findByIdAndDelete(id)
            res.status(200).json({msg:"Atendimento excluído com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            const dados = { tipo, descricao, data, hora, responsavel, pet } = req.body
            const intermediary = await Atendimento.findById(id)
            if (!intermediary) {
                return res.status(400).json({msg:"Atendimento não encontradao!"})
            }
            const response = await Atendimento.findByIdAndUpdate(id, dados)
            res.status(200).json({msg:"Atendimento atualizado com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }
}
const responsavel = {
    create: async (req, res) => {
        try {
            const dados = { nome, cargo, telefone, email } = req.body
            const response = await Responsavel.create(dados)
            res.status(200).json({msg:"Responsável criado com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    read: async (req, res) => {
        try {
            const response = await Responsavel.find()
            res.status(200).json({response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    readOne: async (req, res) => {
        try {
            const id = req.params.id
            const response = await Responsavel.findById(id)
            if (!response) {
                return res.status(400).json({msg:"Responsável não encontrado!"})
            }
            res.status(200).json({response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const intermediary = await Responsavel.findById(id)
            if (!intermediary) {
                return res.status(400).json({msg:"Responsável não encontrado!"})
            }
            const response = await Responsavel.findByIdAndDelete(id)
            res.status(200).json({msg:"Responsável excluído com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            const dados = { nome, cargo, telefone, email } = req.body
            const intermediary = await Responsavel.findById(id)
            if (!intermediary) {
                return res.status(400).json({msg:"Responsável não encontrado!"})
            }
            const response = await Responsavel.findByIdAndUpdate(id, dados)
            res.status(200).json({msg:"Responsável atualizado com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }
}
const pet = {
    create: async (req, res) => {
        try {
            const dados = { nome, tutor, telefone, endereco } = req.body
            const response = await Pet.create(dados)
            res.status(200).json({msg:"Pet criado com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    read: async (req, res) => {
        try {
            const response = await Pet.find()
            res.status(200).json({response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    readOne: async (req, res) => {
        try {
            const id = req.params.id
            const response = await Pet.findById(id)
            if (!response) {
                return res.status(400).json({msg:"Pet não encontrado!"})
            }
            res.status(200).json({response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const intermediary = await Pet.findById(id)
            if (!intermediary) {
                return res.status(400).json({msg:"Pet não encontrado!"})
            }
            const response = await Pet.findByIdAndDelete(id)
            res.status(200).json({msg:"Pet excluído com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id
            const dados = { nome, tutor, telefone, endereco } = req.body
            const intermediary = await Pet.findById(id)
            if (!intermediary) {
                return res.status(400).json({msg:"Pet não encontrado!"})
            }
            const response = await Pet.findByIdAndUpdate(id, dados)
            res.status(200).json({msg:"Pet atualizado com sucesso!", response})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }
}
const loger = {
    signup: async (req, res) => {
        const dados = { nome, email, senha } = req.body
        try {
            if (await User.findOne({email})) {
                return res.status(409).json({msg:"Usuário já existe!"})
            }
            await User.create(dados)
            res.status(200).json({msg:"Cadastro feito com sucesso!"})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    },
    signin: async (req, res) => {
        try {
            const { email } = req.body
            const { senha } = req.body
            const user = await User.findOne({ email }).select('+senha')
            if (!user) {
                return res.status(404).json({msg:"Usuário não cadastrado!"})
            }
            const userExist = await bcrypt.compare(senha, user.senha)
            if (!userExist) {
                console.log(senha, user.senha)
                return res.status(409).json({msg:"As senha não batem!"})
            }
            const token = jwt.sign({user: email}, process.env.SECRET, { expiresIn: 3000});
            res.cookie('token', token, { maxAge: 3000, httpOnly: true, sameSite: 'Strict', secure: false})
            res.status(200).json({msg:"Logado com sucesso!", token})
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }
}

module.exports = { atendimento, responsavel, pet, loger }