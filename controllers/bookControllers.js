const Book = require("../models/Book");
const Author = require("../models/Author");

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

exports.addBook = async (req, res) => {
  const book = new Book({
    title : req.body.title, 
    year: req.body.year, 
    author : req.body.author 
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Book.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: "Book not found" });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};

async function getBook(req, res, next){
  let book
  try{
    book = await Book.findById(req.params.id)
    if(book == null){
      return res.status(404).json({message: 'Cannot find book'});
    }
  } catch (err){
    return res.status(500).json({message: err.message})
  }
  res.book = book;
  next()
}

exports.getBookById = async (req, res) => {
  res.json(res.book);
};

exports.getBook = getBook;
