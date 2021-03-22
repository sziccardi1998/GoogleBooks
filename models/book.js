const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleId: { type: String },
    title: { type: String },
    authors: [{ type: String }],
    description: { type:String },
    cover: { type: String },
    link: { type: String },
    categories: [{ type: String }],
    date: { type: Date, default: Date.now},
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;