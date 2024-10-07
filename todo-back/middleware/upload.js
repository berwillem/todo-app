const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Check if the uploads directory exists, if not, create it
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Save files in the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Rename file with timestamp
  },
});

// File filter to only allow image uploads
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimeType && extName) {
    cb(null, true); // Accept image file
  } else {
    cb(new Error("Only image files (jpeg, jpg, png, gif) are allowed!")); // Reject non-image files
  }
};

// Create the multer instance with a file size limit and file filter
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB size limit
});

// Export the upload middleware
module.exports = upload.single("image"); // Use .single("fieldname") for single file uploads
