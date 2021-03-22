import React, { useState } from "react";
import { Image, Card, Button } from "react-bootstrap";
import API from "../../utils/API";

function BookCard(props) {
  const [saveStatus, setSaveStatus] = useState("Save Book");
  const [deleteStatus, setDeleteStatus] = useState("Delete Book");
  const loadAuthors = (props) => {
    if (props.book.authors || props.authors) {
      return <Card.Text>by {props.book.authors || props.authors}</Card.Text>;
    }
  };
  function saveBook(bookData) {
    API.saveBook(bookData).then((response) => {
        setSaveStatus("Saved");
      })
      .catch((err) => console.log(err));
  }
  function deleteBook(_id) {
    API.deleteSavedBook(_id).then((response) => {
        setDeleteStatus("Deleted");
        props.loadBooks();
      })
      .catch((err) => console.log(err));
  }
  function displayLastButton(props) {
    switch (props.headerButton) {
      case "delete": {
        return (
          <Button
            onClick={() => {
              console.log(props.book._id);
              deleteBook(props.book._id);
            }}
            variant="outline-info"
          >
            {deleteStatus}
          </Button>
        );
      }
      case "save": {
        return (
          <Button
            onClick={() => {
              console.log(props.book);
              saveBook(props.book);
            }}
            variant="outline-info"
          >
            {saveStatus}
          </Button>
        );
      }
    }
  }
  return (
    <Card
      key={props.book.googleId}
    >
      <Card.Header style={{ color: "white" }}>
        {props.book.categories}
        {displayLastButton(props)}
        <Button
          href={props.book.link}
          target="_blank"
          variant="outline-info"
        >
          Learn More
        </Button>
      </Card.Header>
      <Card.Body>
        <Image
          src={props.book.cover}
        />

        <Card.Title>{props.book.title}</Card.Title>
        {loadAuthors(props)}
        <Card.Text>{props.book.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;