import React, { useState, useEffect } from "react";
import Hero from "../components/hero";
import API from "../utils/api";
import BookCard from "../components/bookCard";
import NoResults from "../components/noResults";
function Saved() {
  const [books, setBooks] = useState({});

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getSavedBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Hero title="Saved Books" />
      {books.length ? (
        <div>
          {books.map((book) => (
            <BookCard book={book} headerButton="delete" loadBooks={loadBooks} />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default Saved;