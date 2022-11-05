import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import logo from "./img/Logo.svg"
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {RiAccountCircleFill} from "react-icons/ri"
//import "./custom.scss";

export default function MainNavbar() {

    return (
        <Navbar bg="primary" variant="primary" className="px-lg-5 px-md-3 px-sm-1">
            <Container  className="mx-lg-5 mx-md-3 mx-sm-1">
                <Nav className="mx-5">
                    <Navbar.Brand href="#home">
                        {/*temporary img, SVG is needed here*/}
                        <img src={logo}
                             width="150"
                             height="60"
                             className="d-inline-block align-top"
                             alt="Unison Logo"
                        />
                    </Navbar.Brand>
                    <Nav.Link href="#physical" className="px-3 text-light">ფიზიკური პირებისთვის</Nav.Link>
                    <Nav.Link href="#judicial" className="px-3 text-light">იურიდიული პირებისთვის</Nav.Link>
                    <Nav.Link href="#obligatory" className="px-3 text-light">სავალდებულო დაზღვევა</Nav.Link>
                </Nav>
            </Container>
                <Nav>
                    <RiAccountCircleFill size="4em" className="text-light"/>
                <Nav.Link href="#myaccount" className="text-light">ჩემი კაბინეტი</Nav.Link>
               </Nav>
        </Navbar>
    )
}