const { getTodos, getTodoById, addTodo, updateTodo, deleteTodo } = require('../controllers/todoController')


const router = require('express').Router()

router.get("/", getTodos)
router.get("/:todoId", getTodoById)
router.post("/", addTodo)
router.put("/:todoId", updateTodo)
router.delete("/:todoId", deleteTodo)


module.exports = router