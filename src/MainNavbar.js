import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import Logo from "./img/logo.jpg";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {RiAccountCircleFill} from "react-icons/ri"
import "./custom.scss";

export default function MainNavbar() {

    return (
        <Navbar bg="primary" variant="primary">
            <Container  className="mx-lg-5 mx-md-3 mx-sm-1">
                <Nav className="mx-5">
                    <Navbar.Brand href="#home">
                        {/*temporary img, SVG is needed here*/}
                        <img src={Logo}
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

                <Nav className="mx-3">
                    <RiAccountCircleFill size="3em" className="text-light"/>
                <Nav.Link href="#myaccount" className="text-light">ჩემი კაბინეტი</Nav.Link>
               </Nav>
        </Navbar>
    )
}