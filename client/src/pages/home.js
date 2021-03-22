import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";

function Home() {
  const [books, setBooks] = useState({});
  const structureBook = (bookData) => {
    return {
      googleId: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      cover: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink,
      categories: bookData.volumeInfo.categories,
    };
  };
  useEffect(() => {
    if (localStorage.getItem("searchQuery")) {
      loadBooks();
    }
  }, []);
  function loadBooks() {
    API.getBooks(localStorage.getItem("searchQuery"))
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items.map((bookData) => structureBook(bookData)));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Hero title="Searched Books" />
      {books.length ? (
        <div>
          {books.map((book) => (
            <BookCard book={book} headerButton="save" />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
}

export default Home;