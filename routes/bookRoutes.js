const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookControllers");

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getBook, bookController.getBookById);
router.post("/", bookController.addBook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
