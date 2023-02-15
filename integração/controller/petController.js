const Pet = require("../models/Pet")

const petController = {

    create: async (req, res) => {
        try {
            const pet = {
                nome: req.body.nome,
                tutor: req.body.tutor,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
            }

            await Pet.create(pet)

            res.status(200).redirect("/api/pet")
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    read: async (req, res) => {
        try {
            const responseRead = await Pet.find()

            res.status(201).render("../views/pet.ejs", {responseRead: responseRead})
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id

            const pet = await Pet.findById(id)

            if(!pet){
                const msg = "Pet não econtrado!"
                return res.render('../views/erro.ejs', {msg})
            }

            const responseDelete = await Pet.findByIdAndDelete(id)

            res.status(200).redirect('/api/pet')
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id

            const pet = {
                nome: req.body.nome,
                tutor: req.body.tutor,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
            }

            const responseUpdate = await Pet.findByIdAndUpdate(id, pet)

            if(!responseUpdate){
                const msg = "Pet não econtrado!"
                return res.render('../views/erro.ejs', {msg})
            }

            res.status(200).redirect('/api/pet')
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
}

module.exports = petController