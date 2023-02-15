const { User } = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userController = {

    create: async (req, res) => {
    const dados = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }
    const { email } = req.body
        try {
            if(await User.findOne({email})){
                const msg = "Usuário já existe!"
                return res.render('../views/erro.ejs', {msg})
            }

            await User.create(dados)

            res.redirect('/api/sigin')
        } catch (error) {
            const msg = "Cadastro de usuário falhou."
            res.render('../views/erro.ejs', {msg})
        }
    },
    authenticate: async (req, res)=>{
        const {email, senha} = req.body
        const user = await User.findOne(email).select('+senha')

        if(!user){
            const msg = "Usuário não encontrado!"
            return res.render('../views/erro.ejs', {msg})
        }

        const userExist = await bcrypt.compare(senha, user.senha)

        if(!userExist){
            const msg = "Senha Inválida!"
            return res.render('../views/erro.ejs', {msg})
        }
    
        const token = jwt.sign({user: email}, process.env.SECRET, { expiresIn: 3000});

        res.cookie('token', token, { maxAge: 3600000, httpOnly: true, sameSite: 'Strict', secure: false})
        res.redirect('/api/')
        
    },
    login: async (req,res) =>{
        res.render("../views/login.ejs")
    },
    cadastro: async(req,res) =>{
        res.render("../views/cadastro.ejs")
    },
    logout: async (req, res) => {
        const { token } = req.cookies
        res.cookie('token', token, {maxAge: 10})
        res.redirect("/api/sigin")
    }
}

module.exports = userController