const router = require("express").Router()
const responsavelController = require("../controller/responsavelController")
const verifyJWT = require("../middleware/index")

router.route('/responsavel').post(verifyJWT, (req, res) => responsavelController.create(req, res))
router.route('/responsavel').get(verifyJWT, (req, res) => responsavelController.read(req, res))
router.route('/responsavel/:id').put(verifyJWT, (req, res) => responsavelController.update(req, res))
router.route('/responsavel/:id').delete(verifyJWT, (req, res) => responsavelController.delete(req, res))

module.exports = router