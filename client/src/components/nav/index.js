import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation() {
  const [query, setQuery] = useState("");
  return (
    <Navbar variant="dark">
      <Navbar.Brand href="/home" style= {{color: "#800080" }}>
        Google Book Sorter
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/saved" style= {{color: "#800080" }}>Saved</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="search book"
          className="mr-sm-2"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          href="/"
          onClick={() => localStorage.setItem("searchQuery", query)}
          variant="outline-info"
          style= {{color: "#800080" }}
        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
}

export default Navigation;