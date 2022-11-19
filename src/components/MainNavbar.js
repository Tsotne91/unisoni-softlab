import {Container, Nav, Navbar, Overlay} from "react-bootstrap";
import {RiAccountCircleFill} from "react-icons/ri";
import {useRef, useState} from "react";
import Button from "react-bootstrap/Button";

export default function MainNavbar() {
    const [overlayShow, setOverlayShow] = useState(false);
    const [additionalOverlayShow, setAdditionalOverlayShow] = useState(false);
    const target1 = useRef(null);
    const target2 = useRef(null);


    return (
        <>
            <Navbar bg="primary" className="d-none d-md-flex px-lg-5 px-md-2 px-sm-1">
                <Container className="mx-lg-3 mx-md-1 mx-sm-0 justify-content-md-center justify-content-sm-start">
                    <Nav className="px-lg-4 px-md-0 w-75 py-3 align-items-center">
                        <Navbar.Brand href="#home">
                            <img src="./img/Logo.svg"
                                 width="200"
                                 height="60"
                                 className="d-inline-block align-top"
                                 alt="Unison Logo"
                            />
                        </Navbar.Brand>
                        <Nav.Link href="#physical"
                                  className="mx-lg-3 px-lg-3 mx-sm-0 px-sm-0 text-light"
                                  ref={target1}
                                  onMouseOver={() => setOverlayShow(!overlayShow)}
                        >ფიზიკური პირებისთვის</Nav.Link>
                        <Overlay target={target1.current} show={overlayShow} placement="bottom"> {/*is not working reliably, should be fixed*/}
                            {
                                ({
                                     placement, scheduleUpdate,
                                     arrowProps, outOfBoundaries,
                                     show: overlayShow, ...props
                                 }) => (
                                    <div
                                        {...props}
                                        className="mainNavbarOverlay py-5"
                                    >
                                        <div className="px-5 py-2"><img
                                            src="img/insuranceIcons/health_and_safety_black_48dp.svg"/> <a>ინდივიდუალური
                                            ჯანმრთელობის დაზღვევა</a></div>
                                        <div className="px-5 py-2"><img
                                            src="img/insuranceIcons/directions_car_filled_black_48dp.svg"/> <a>ავტოდაზღვევა
                                            - პაკეტები</a></div>
                                        <div className="px-5 py-2"
                                             ref={target2}
                                             onMouseOver={() => setAdditionalOverlayShow(!additionalOverlayShow)}
                                        ><img src="img/insuranceIcons/24px.svg"/> <span>მძღოლის პასუხისმგებლობის დაზღვევა</span>
                                        </div>
                                        <Overlay target={target2.current} show={additionalOverlayShow}
                                                 placement="right"> {
                                                ({
                                                     placement, scheduleUpdate,
                                                     arrowProps, outOfBoundaries,
                                                     show: additionalOverlayShow, ...props
                                                 }) => (
                                                    <div {...props}
                                                         className="additionalOverlay bg-light py-3">
                                                        <div className="py-2 px-4"><a>შემოსული ტურისტებისთვის</a></div>
                                                        <div className="py-2 px-4"><a>გამსვლელი ტურისტებისთვის</a></div>
                                                    </div>
                                                )}
                                        </Overlay>

                                        <div className="px-5 py-2"><img
                                            src="img/insuranceIcons/flight_takeoff_black_48dp.svg"/><a>სამოგზაურო
                                            დაზღვევა</a></div>
                                    </div>
                                )}
                        </Overlay>

                        <Nav.Link href="#judicial" className="mx-md-3 px-md-1 text-light ">იურიდიული პირებისთვის</Nav.Link>
                        <Nav.Link href="#obligatory" className="mx-md-3 px-md-1 text-light">სავალდებულო დაზღვევა</Nav.Link>
                    </Nav>
                </Container>
                <Container className="d-none d-md-flex justify-content-end">
                    <Nav>
                        <Button variant="danger" className="text-light px-md-4 mx-md-4 px-sm-2 mx-md-2"> {/*this button almost overlaps on md, should be fixed*/}
                        <img src="/img/footerIcons/shopping_cart_black_24dp.svg"/>
                        <span className="px-2">შეიძინე ონლაინ</span>
                    </Button>
                    </Nav>

                <Nav className="mx-md-1 d-none d-md-flex">
                    <RiAccountCircleFill size="4rem" className="text-light"/>
                    <Nav.Link href="#myaccount" className="text-light d-none d-lg-flex w-50">ჩემი კაბინეტი</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <Navbar bg="light" className="d-md-flex d-md-none justify-content-center">
                <Navbar.Brand href="#home">
                    <img src="./img/Group334.svg"
                         width="150"
                         height="60"
                         className="d-inline-block align-top"
                         alt="Unison Logo"
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    )
}