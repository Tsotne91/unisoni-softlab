import {Container, Nav, Navbar, NavDropdown, Overlay, OverlayTrigger} from "react-bootstrap";
import React, {useRef, useState} from "react";
import {BsFillTelephoneFill} from "react-icons/bs";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap-grid.min.css";
// import "custom.scss";

export default function TopNavbar (){
    const [show, setShow] = useState(false);
    const target = useRef(null);


    return (
        <Navbar bg="dark" variant="dark" className="py-0">
            <Container style={{fontSize: "0.7vw"}}>
                <Nav className="me-auto">
                    <Nav.Link href="#home">მთავარი</Nav.Link>
                    <Nav.Link href="#aboutus">ჩვენს შესახებ</Nav.Link>
                    <Nav.Link href="#news">სიახლეები</Nav.Link>
                    <Nav.Link href="#partners">პარტნიორები</Nav.Link>
                    <Nav.Link href="#contact">კონტაქტი</Nav.Link>
                    {/*<div className="sosDropdown">*/}
                    {/*    <button className="text-center m-2 px-2 w-100 sosButton">SOS</button>*/}
                    {/*    <div className="sosDropdown-content">*/}
                    {/*        <a href="#">მოხდა სადაზღვევო შემთხვევა</a>*/}
                    {/*        <a href="#">შემთხვევის სტატუსის შემოწმება</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <Button variant="danger"
                            ref={target}
                            onMouseOver={()=>setShow(!show)}>
                    SOS</Button>
                    <Overlay
                        target={target.current}
                        show={show}
                        placement='bottom'
                      >
                        {
                            ({show: _show, popper, ...props}) =>
                                (
                                    <div
                                        {...props}
                                        style={{
                                            position: 'absolute',
                                            backgroundColor: 'danger',
                                            padding: '2px 10px',
                                            color: 'white',
                                            borderRadius: 4,
                                            ...props.style,
                                        }}
                                        >
                                        Simple Tooltip

                                    </div>
                                )
                        }


                    </Overlay>
                </Nav>
                <Nav>
                   <NavDropdown title="ქართული" >
                        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Русский</NavDropdown.Item>
                    </NavDropdown>

                 <Nav.Link className="mx-2">ცხელი ხაზი  <BsFillTelephoneFill/> 2 991 991</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )


}