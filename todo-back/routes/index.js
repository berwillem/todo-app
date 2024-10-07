


const router = require('express').Router()
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const todoRoutes = require('./todoRoutes')
const statsRoutes = require('./statsRoutes')


router.use("/auth", authRoutes)
router.use("/user", userRoutes)
router.use("/user/:id/todo", todoRoutes)
router.use("/stats", statsRoutes) 


module.exports = router
