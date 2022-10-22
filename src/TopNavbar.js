import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {BsFillTelephoneFill} from "react-icons/bs";
import {GE, GB, RU} from 'country-flag-icons/react/3x2';

export default function TopNavbar (){


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
                <Nav>
                    <NavDropdown title="ქართული" >
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Русский  </NavDropdown.Item>
                    </NavDropdown>

                 <Nav.Link className="mx-2">ცხელი ხაზი  <BsFillTelephoneFill/> 2 991 991</Nav.Link>

                </Nav>

            </Container>
        </Navbar>
    )


}