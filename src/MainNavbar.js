import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import React from "react";
import Logo from "./img/logo.jpg";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {RiAccountCircleFill} from "react-icons/ri"

export default function MainNavbar() {

    return (
        <Navbar bg="primary" variant="primary">
            <Container>
                <Nav>
                    <Navbar.Brand href="#home">
                        {/*temporary img, SVG is needed here*/}
                        <img src={Logo}
                             width="150"
                             height="60"
                             className="d-inline-block align-top"
                             alt="Unison Logo"
                        />
                    </Navbar.Brand>
                    <Nav.Link href="#physical" className="text-light">ფიზიკური პირებისთვის</Nav.Link>
                    <Nav.Link href="#judicial" className="text-light">იურიდიული პირებისთვის</Nav.Link>
                    <Nav.Link href="#obligatory" className="text-light">სავალდებულო დაზღვევა</Nav.Link>
                </Nav>
            </Container>

                <Nav>
                    <RiAccountCircleFill size="3em" className="text-light"/>
                <Nav.Link href="#myaccount" className="text-light">ჩემი კაბინეტი</Nav.Link>
               </Nav>
        </Navbar>
    )
}