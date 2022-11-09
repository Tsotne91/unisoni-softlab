import {Container, Nav, Navbar, NavDropdown, Overlay, Tooltip} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {BsFillTelephoneFill} from "react-icons/bs";
import Button from "react-bootstrap/Button";


export default function TopNavbar() {
    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <Navbar bg="dark" variant="dark" className="d-none d-md-flex py-md-0">
            <Container style={{fontSize: "0.8rem"}}>
                <Nav className="px-lg-5 px-md-0 ">
                    <Nav.Link href="#home">მთავარი</Nav.Link>
                    <Nav.Link href="#aboutus">ჩვენს შესახებ</Nav.Link>
                    <Nav.Link href="#news">სიახლეები</Nav.Link>
                    <Nav.Link href="#partners">პარტნიორები</Nav.Link>
                    <Nav.Link href="#contact">კონტაქტი</Nav.Link>
                    <Button variant="danger" className="text-light mx-4 my-1 px-4"
                            ref={target}
                            onMouseOver={() => setShow(!show)}>
                        SOS</Button>
                    <Overlay
                        target={target.current}
                        show={show}
                        placement='bottom'
                    >
                        {
                            ({placement, scheduleUpdate, arrowProps, outOfBoundaries, show, ...props}) =>
                                (
                                    <div
                                        {...props}
                                        style={{
                                            position: 'absolute',
                                            right: '5rem',
                                            width: '18rem',
                                            backgroundColor: '#EE313C',
                                            textAlign: 'center',
                                            fontSize: "0.8rem",
                                            padding: '0.4rem 1rem',
                                            color: 'white',
                                            borderRadius: 5,
                                            ...props.style,
                                        }}
                                    >
                                        <div className="py-2"><a style={{textDecoration:"none"}}>მოხდა სადაზღვევო შემთხვევა</a></div>
                                        <div className="py-2"><a style={{textDecoration:"none"}}>შემთხვევის სტატუსის შემოწმება</a></div>
                                    </div>
                                )
                        }


                    </Overlay>
                </Nav>
                <Nav className="mx-0">
                    <NavDropdown title="ქართული">
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Русский</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link className="mx-2">ცხელი ხაზი <BsFillTelephoneFill/> 2 991 991</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )


}