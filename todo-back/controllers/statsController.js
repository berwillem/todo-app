const User = require("../models/User");
const Todo = require("../models/Todo");


const userCount = async (req, res) => {
    try 
    {
        const userCount = await User.countDocuments({});
        res.status(200).json({ userCount: userCount });
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}

const todoCount = async (req, res) => {
    try
    {
        const todoCount = await Todo.countDocuments({});
        res.status(200).json({ todoCount: todoCount });
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}

const getEmails = async (req, res) => {
    try
    {
        const users = await User.find({}, { email: 1, _id: 0 })
        res.status(200).json(users);
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}

const getUsersWithTheirTodos = async (req, res) => {
    try
    {
        const usersWithTodos = await User.find({}, { email: 1, todos: 1, _id: 0 })
        res.status(200).json({usersWithTodos});
        
    }
    catch(error)
    {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { userCount, todoCount, getEmails, getUsersWithTheirTodos };