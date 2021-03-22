import React from "react";
import { Jumbotron } from "react-bootstrap";

function Hero(props) {
  return (
    <Jumbotron
      style={{
        backgroundImage:
          "url(https://collegeinfogeek.com/wp-content/uploads/2018/11/Essential-Books.jpg)",
      }}
    >
      <h1
        style={{
          display: "inline",
          padding: "0px 10px 0px 10px",
          border: "3px dashed #07575B",
          borderRadius: "10px",
        }}
      >
        {props.title}
      </h1>
    </Jumbotron>
  );
}

export default Hero;