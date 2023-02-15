const router = require('express').Router()
const verifyJWT = require('../middleware/index')
const { atendimento } = require('../controller/apiController')
const { responsavel } = require('../controller/apiController')
const { pet } = require('../controller/apiController')
const { loger } = require('../controller/apiController')

// Rotas de atendimento
router.post('/atendimento', verifyJWT, atendimento.create)
router.get('/atendimento', verifyJWT, atendimento.read)
router.get('/atendimento/:id', verifyJWT, atendimento.readOne)
router.delete('/atendimento/:id', verifyJWT, atendimento.delete)
router.put('/atendimento/:id', verifyJWT, atendimento.update)

// Rotas de responsavel
router.post('/responsavel', verifyJWT, responsavel.create)
router.get('/responsavel', verifyJWT, responsavel.read)
router.get('/responsavel/:id', verifyJWT, responsavel.readOne)
router.delete('/responsavel/:id', verifyJWT, responsavel.delete)
router.put('/responsavel/:id', verifyJWT, responsavel.update)

// Rotas de pet
router.post('/pet', verifyJWT, pet.create)
router.get('/pet', verifyJWT, pet.read)
router.get('/pet/:id', verifyJWT, pet.readOne)
router.delete('/pet/:id', verifyJWT, pet.delete)
router.put('/pet/:id', verifyJWT, pet.update)

// Rotas de loger
router.post('/signin', loger.signin)
router.post('/signup', loger.signup)

module.exports = router