import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
// style used in modal :
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Blog() {
  // states :
  const [blogPosts, setBlogPosts] = useState([]);
  const [openCreate, setOpenCreate] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
  });
  const [openDelete, setOpenDelete] = useState(false);

  // evets functions :
  const fetchPosts = () => {
    axios
      .get("http://localhost:5000/api/v1/blogs")
      .then((response) => {
        setBlogPosts(response.data.blogs);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  };
  const createPost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/v1/blogs", {
        title: post.title,
        content: post.content,
        author: "ibraim",
      });

      // Assuming the new post is directly returned in response.data
      setBlogPosts([...blogPosts, response.data]); // Append the new blog post to the list

      setPost({
        title: "",
        content: "",
        author: "",
      }); // Reset the form

      alert("Blog post created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("An error occurred while creating the blog post.");
    }

    setOpenCreate(false); // Close the modal
    fetchPosts();
  };

  const handleDeletion = async (post) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/blogs/${post._id}`
      );
      console.log(response);
      setBlogPosts(blogPosts.filter((blog) => blog._id !== post.id));
      alert("Blog post deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog post:", error);
      alert("An error occurred while deleting the blog post.");
    }
    setOpenDelete(false); // Close the modal
    fetchPosts();
  };
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  // effects :
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <div>
      <div className="post-creation">
        <Button onClick={handleOpenCreate}>Create a post !</Button>
        {/* modal using mui */}
        <Modal
          open={openCreate}
          onClose={handleCloseCreate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create a post
            </Typography>
            <form action="" onSubmit={createPost}>
              <label htmlFor="">Title:</label>
              <input
                type="text"
                name="title"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
              />
              <label htmlFor="">Content:</label>
              <textarea
                name="content"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
              />
              <button>Submit</button>
            </form>
          </Box>
        </Modal>
      </div>
      {/* maping the blog posts */}
      {blogPosts.length > 0 ? (
        blogPosts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-deletion">
              <Button onClick={handleOpenDelete}>Delete</Button>
              <Modal
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Are you sure you want to delete the post?
                  </Typography>
                  <button onClick={() => handleDeletion(post)}>
                    Yes, I am sure!
                  </button>
                </Box>
              </Modal>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h2>No blog posts are available!</h2>
        </div>
      )}
    </div>
  );
}
