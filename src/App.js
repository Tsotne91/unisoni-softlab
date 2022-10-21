import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";


function App() {
  return (

      <Navbar bg="dark" variant="dark" className="py-0">
          <Container>
                  <Nav className="me-auto">
                      <Nav.Link href="#home">მთავარი</Nav.Link>
                      <Nav.Link href="#aboutus">ჩვენს შესახებ</Nav.Link>
                      <Nav.Link href="#news">სიახლეები</Nav.Link>
                      <Nav.Link href="#partners">პარტნიორები</Nav.Link>
                      <Nav.Link href="#contact">კონტაქტი</Nav.Link>
                      <div className="sosDropdown">
                          <button  className="text-center  m-2 px-3 sosButton">SOS</button>
                          <div className="sosDropdown-content">
                              <a href="#">მოხდა სადაზღვევო შემთხვევა</a>
                              <a href="#">შემთხვევის სტატუსის შემოწმება</a>
                          </div>
                      </div>
                  </Nav>
          </Container>
      </Navbar>

  );
}

export default App;
