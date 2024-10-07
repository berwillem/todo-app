const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController')

const router = require('express').Router()

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)


module.exports = router