const Todo = require('../models/Todo');
const User = require('../models/User');


exports.getTodos = async (req, res) => {
    const {id} = req.params.id
    try
    {
        const user = await User.findById({_id: id}).populate('todos');
        res.json(user.todos);
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

exports.addTodo = async (req, res) => {
    const { id } = req.params
    const { title, description, priority } = req.body
    try
    {
        const todo = await Todo.create({
            title,
            description,
            priority,
            owner: id
        })
        const user = User.findOne({ _id: id })
        user.tasks.push(todo._id)
        user.save()

        res.status(200).json({todo})
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

exports.getTodoById = async (req, res) => {
    const { todoId } = req.params
    try
    {
        const todo = await Todo.findOne({ _id: todoId })
        res.status(200).json({todo})
    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}

exports.updateTodo = async (req, res) => {
    const { todoId } = req.params
    const { title, description, priority } = req.body
    try
    {
        const updatedTodo = await Todo.findByIdAndUpdate({ _id: todoId}, { 
            title, 
            description,
            priority
         })
         res.status(200).json({updatedTodo})

    }
    catch(err)
    {
        res.status(500).json({message: err.message});
    }
}


exports.deleteTodo = async (req, res) => {
    const { todoId } = req.params
    try
    {
        const deletedTodo = await Todo.findByIdAndDelete({ _id: todoId })
        res.status(200).json({deletedTodo})
    }
    catch(error)
    {
        res.status(500).json({ message: error.message})
    }
}