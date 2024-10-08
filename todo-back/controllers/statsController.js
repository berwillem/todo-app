const User = require("../models/User");
const Todo = require("../models/Todo");

const userCount = async (req, res) => {
  try {
    const userCount = await User.countDocuments({});
    res.status(200).json({ userCount: userCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const todoCount = async (req, res) => {
  try {
    const todoCount = await Todo.countDocuments({});
    res.status(200).json({ todoCount: todoCount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEmails = async (req, res) => {
  try {
    const users = await User.find({}, { email: 1, _id: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsersWithTheirTodos = async (req, res) => {
  try {
    const usersWithTodos = await User.find({}, { email: 1, todos: 1, _id: 0 });
    res.status(200).json({ usersWithTodos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.aggregate([
      {
        // Join with the Todo collection
        //lookup: Joins the User collection with the Todo collection based on the tasks array.
        $lookup: {
          from: "todos",
          localField: "tasks",
          foreignField: "_id",
          as: "todos",
        },
      },
      {
        // Add a field to count only completed todos
        //addFields: Adds a new field completedTodosCount to store the count of completed todos.
        $addFields: {
          completedTodosCount: {
            $size: {
              $filter: {
                input: "$todos",
                as: "todo",
                cond: { $eq: ["$$todo.completed", true] },
              },
            },
          },
        },
      },
      {
        // Sort by the number of completed todos in descending order
        $sort: { completedTodosCount: -1 },
      },
      {
        // Limit to top 10 users
        $limit: 10,
      },
      {
        // Only return relevant fields
        //project: Limits the fields returned to username, email, and completedTodosCount.
        $project: {
          username: 1,
          email: 1,
          completedTodosCount: 1,
        },
      },
    ]);

    res.status(200).json({ leaderboard });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  userCount,
  todoCount,
  getEmails,
  getUsersWithTheirTodos,
  getLeaderboard,
};
