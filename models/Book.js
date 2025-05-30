const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  year: { 
    type: Number, 
    required: true 
  },
  author: { 
    type: String, 
    ref: "Author", 
    required: true 
  },
});

module.exports = mongoose.model("Book", bookSchema);
