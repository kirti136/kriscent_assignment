const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");
const {
  createBookValidationRules,
  validate,
} = require("../middlewares/validation.middleware");
const { verifyToken } = require("../middlewares/authentication.middleware");
const { authorizeRoles } = require("../middlewares/authorization.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");

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
  validateObjectId,
  authorizeRoles("Admin", "Author"),
  bookController.updateBook
);

// Delete a book route
router.delete(
  "/:id",
  verifyToken,
  validateObjectId,
  authorizeRoles("Admin"),
  bookController.deleteBook
);

// Get all books route
router.get("/", verifyToken, bookController.getAllBooks);

// Get a single book route
router.get("/:id", verifyToken, validateObjectId, bookController.getBookById);

module.exports = router;
