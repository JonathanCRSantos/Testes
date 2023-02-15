const router = require("express").Router()
const verifyJWT = require("../middleware/index")

const atendimentoController = require("../controller/atendimentoController")

router.route('/atendimento').post(verifyJWT, (req, res) => atendimentoController.create(req, res))
router.route('/atendimento').get(verifyJWT, (req, res) => atendimentoController.read(req, res))
router.route('/atendimento/:id').get(verifyJWT, (req, res) => atendimentoController.readOne(req, res))
router.route('/atendimento/:id').delete(verifyJWT, (req, res) => atendimentoController.delete(req, res))
router.route('/atendimento/:id').patch(verifyJWT, (req, res) => atendimentoController.update(req, res))

module.exports = router