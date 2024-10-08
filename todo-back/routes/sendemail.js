const { sendemail } = require('../controllers/sendemailcontroller')


const router = require('express').Router()


router.post("/", sendemail)



module.exports = router