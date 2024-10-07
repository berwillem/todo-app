


const router = require('express').Router()
const authRoutes = require('./authRoutes')
const userRoutes = require('./userRoutes')
const todoRoutes = require('./todoRoutes')
const blogRoutes = require('./blogRoutes'); 

router.use("/auth", authRoutes)
router.use("/user", userRoutes)
router.use("/user/:id/todo", todoRoutes)
router.use("/blogs", blogRoutes); 

module.exports = router
