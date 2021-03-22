import axios from "axios";

export default {
  // Gets all books
  getBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Gets the book with the given id
  getSavedBook: function (id) {
    return axios.get("/api/books/saved" + id);
  },
  // Deletes the book with the given id
  deleteSavedBook: function (id) {
    return axios.delete("/api/books/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books/saved", bookData);
  },

  //Get saved books
  getSavedBooks: function () {
    return axios.get("/api/books/saved");
  },
};