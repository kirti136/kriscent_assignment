const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const {
  createBookValidationRules,
  validate,
} = require("../middlewares/validation.middleware");
const { verifyToken } = require("../middlewares/authentication.middleware");
const { authorizeRoles } = require("../middlewares/authorization.middleware");

// Create a book route
router.post(
  "/",
  verifyToken,
  authorizeRoles("Admin", "Author"),
  createBookValidationRules(),
  validate,
  bookController.createBook
);

// Update a book route
router.put(
  "/:id",
  verifyToken,
  authorizeRoles("Admin", "Author"),
  bookController.updateBook
);

// Delete a book route
router.delete(
  "/:id",
  verifyToken,
  authorizeRoles("Admin"),
  bookController.deleteBook
);

// Get all books route
router.get("/", verifyToken, bookController.getAllBooks);

// Get a single book route
router.get("/:id", verifyToken, bookController.getBookById);

module.exports = router;
