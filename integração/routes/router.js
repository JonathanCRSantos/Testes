const router = require("express").Router()
const petRouter = require("./pet")
const responsavelRouter = require("./responsavel")
const atendimentoRouter = require("./atendimento")
const userRouter = require("./user")
const Atendimento = require("../models/Atendimento")

router.get('/', async (req, res) => {
    const response = await Atendimento.find().populate('responsavel pet')
    res.render('../views/index.ejs', {response : response})
})
router.get('/erro', (req, res) => {res.render('../views/erro.ejs')})
router.use('/', petRouter)
router.use('/', responsavelRouter)
router.use('/', atendimentoRouter)
router.use('/', userRouter)

module.exports = router