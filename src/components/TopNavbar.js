import {Container, Nav, Navbar, NavDropdown, Overlay} from "react-bootstrap";
import {useRef, useState} from "react";
import {BsFillTelephoneFill} from "react-icons/bs";
import Button from "react-bootstrap/Button";


export default function TopNavbar({showButton}) {
    const [sosOverlayShow, setSosOverlayShow] = useState(false);
    const target = useRef(null);


    return (
        <Navbar bg="dark" variant="dark" className="d-none d-md-flex py-md-0">
            <Container style={{fontSize: "0.8rem"}} className="px-md-0 px-lg-1 px-xl-2">
                <Nav className="px-lg-5 px-md-0 ">
                    <Nav.Link href="/">მთავარი</Nav.Link>
                    <Nav.Link href="/about-us">ჩვენს შესახებ</Nav.Link>
                    <Nav.Link href="#news">სიახლეები</Nav.Link>
                    <Nav.Link href="#partners">პარტნიორები</Nav.Link>
                    <Nav.Link href="#contact">კონტაქტი</Nav.Link>
                    {
                       showButton ? <Button variant="danger" className="text-light mx-4 my-1 px-4 py-0"
                                ref={target}
                                onMouseOver={() => setSosOverlayShow(!sosOverlayShow)}>
                            SOS</Button> : null
                    }
                    <Overlay
                        target={target.current}
                        show={sosOverlayShow}
                        placement='bottom'
                    >
                        {
                            ({placement, scheduleUpdate,
                                 arrowProps,
                                 outOfBoundaries, show: sosOverlayShow , ...props}) =>
                                (
                                    <div
                                        {...props}
                                        className="sosButtonOverlay px-0"
                                        style={{...props.style}}
                                    >
                                        <div className="p-2"><a>მოხდა სადაზღვევო შემთხვევა</a></div>
                                        <div className="p-2"><a>შემთხვევის სტატუსის შემოწმება</a></div>
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

                    <Nav.Link className="d-none d-lg-flex mx-2">ცხელი ხაზი <BsFillTelephoneFill/> 2 991 991</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    )


}