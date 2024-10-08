const express = require('express');
const router = express.Router();
const { getAllBlogs, getBlogById, updateBlog, deleteBlog } = require('../controllers/blogController');

router.get('/blogs', getAllBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);

module.exports = router;
