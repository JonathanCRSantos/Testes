const router = require("express").Router()
const petController = require("../controller/petController")
const verifyJWT = require("../middleware/index")

router.route('/pet').post(verifyJWT, (req, res) => petController.create(req, res))
router.route('/pet').get(verifyJWT, (req, res) => petController.read(req, res))
router.route('/pet/:id').delete(verifyJWT, (req, res) => petController.delete(req, res))
router.route('/pet/:id').put(verifyJWT, (req, res) => petController.update(req, res))

module.exports = router