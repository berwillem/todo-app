const Blog = require("../models/Blog");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (blog) res.status(200).json(blog);
    else res.status(404).json({ message: "Blog post not found" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update blog
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      { _id: id },
      { title, content, author },
      { new: true }
    );
    res.status(200).json({ updatedBlog });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete({ _id: id });

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllBlogs, getBlogById, updateBlog, deleteBlog };
