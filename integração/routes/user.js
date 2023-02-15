const router = require("express").Router()

const userController = require("../controller/userController")

// Cadastro
router.route('/signup').get((req, res) => userController.cadastro(req, res))
router.route('/signup').post((req, res) => userController.create(req, res))

// Login
router.route('/sigin').get((req, res) => userController.login(req, res))
router.route('/sigin').post((req, res) => userController.authenticate(req, res))

// Logout
router.route('/logout').get((req, res) => userController.logout(req, res))

module.exports = router