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
          color: "#800080"
        }}
      >
        {props.title}
      </h1>
    </Jumbotron>
  );
}

export default Hero;