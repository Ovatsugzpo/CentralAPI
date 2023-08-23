const express = require ('express')
const router = express.Router()
const HomeController = require('../controllers/Home')

router.get('/', HomeController.application)


module.exports = router