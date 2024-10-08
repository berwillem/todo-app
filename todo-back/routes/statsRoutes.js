const {
  userCount,
  getUsersWithTheirTodos,
  todoCount,
  getEmails,
  getLeaderboard,
} = require("../controllers/statsController");
const router = require("express").Router();

/**
 * @swagger
 * /userCount:
 *   get:
 *     summary: Get the total number of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Total number of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userCount:
 *                   type: integer
 *       500:
 *         description: Internal server error
 */
router.get("/userCount", userCount);

/**
 * @swagger
 * /todoCount:
 *   get:
 *     summary: Get the total number of todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: Total number of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 todoCount:
 *                   type: integer
 *       500:
 *         description: Internal server error
 */
router.get("/todoCount", todoCount);

/**
 * @swagger
 * /getEmails:
 *   get:
 *     summary: Get a list of user emails
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of user emails
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *       500:
 *         description: Internal server error
 */
router.get("/getEmails", getEmails);

/**
 * @swagger
 * /getUsersTodos:
 *   get:
 *     summary: Get a list of users with their todos
 *     tags: [Users, Todos]
 *     responses:
 *       200:
 *         description: A list of users and their todos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usersWithTodos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       email:
 *                         type: string
 *                       todos:
 *                         type: array
 *                         items:
 *                           type: string
 *       500:
 *         description: Internal server error
 */
router.get("/getUsersTodos", getUsersWithTheirTodos);
router.get("/leaderboard", getLeaderboard);

module.exports = router;
