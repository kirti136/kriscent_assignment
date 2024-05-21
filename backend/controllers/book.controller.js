const Book = require("../models/book.model");

// Create a new book
exports.createBook = async (req, res) => {
  try {
    const { title, author, coverPage, year } = req.body;

    const newBook = await Book.create({ title, author, coverPage, year });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book: newBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Update an existing book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, coverPage, year } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, coverPage, year },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Delete an existing book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, data: books });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
