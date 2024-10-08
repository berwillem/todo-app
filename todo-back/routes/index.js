


const router = require('express').Router()
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const todoRoutes = require('./todoRoutes')
const sendemail=require('./sendemail')

router.use("/auth", authRoutes)
router.use("/sendemail",sendemail)
router.use("/user", userRoutes)
router.use("/user/:id/todo", todoRoutes)


module.exports = router
