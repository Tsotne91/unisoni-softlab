import {Container, Nav, Navbar, Overlay, Button, Offcanvas, Row, Col} from "react-bootstrap";
import {useRef, useState} from "react";
import {GoThreeBars} from "react-icons/go";
import {ReactComponent as Health} from "./insuranceIcons/health_and_safety_black_48dp.svg";
import {ReactComponent as Car} from "./insuranceIcons/directions_car_filled_black_48dp.svg";
import {ReactComponent as Person} from "./insuranceIcons/Component 8 – 17.svg";
import {ReactComponent as Plane} from "./insuranceIcons/flight_takeoff_black_48dp.svg";
import {ReactComponent as CallAgent} from "./insuranceIcons/Path236.svg";
import {ReactComponent as Account} from "./insuranceIcons/Component8-11.svg";
import {ReactComponent as MobileAccount} from "./insuranceIcons/mobile/Component8-11Mobile.svg";
import {ReactComponent as MobilePhysical} from "./insuranceIcons/mobile/Path234.svg";
import {ReactComponent as Arrow} from "./insuranceIcons/mobile/Path230.svg";
import {ReactComponent as MobileJudicial} from "./insuranceIcons/mobile/Path233.svg";
import {ReactComponent as MobileObligatory} from "./insuranceIcons/mobile/Union5.svg";
import {ReactComponent as MobileCallAgent} from "./insuranceIcons/mobile/CallAgent.svg";

export default function MainNavbar() {
    const [overlayShow, setOverlayShow] = useState(false);
    const [smallOverlayShow, setSmallOverlayShow] = useState(false);
    const [showFirstCanvas, setShowFirstCanvas] = useState(false);
    const target1 = useRef(null);
    const target2 = useRef(null);

    const handleCloseCanvas = () => setShowFirstCanvas(false);
    const handleShowCanvas = () => setShowFirstCanvas(true);


    return (
        <>
            <Navbar bg="primary" className="mainNavbar d-none d-md-flex px-lg-5 px-md-3 px-sm-1 py-0">
                <Container className="mx-lg-3 mx-md-1 mx-sm-0 h-100 justify-content-md-center justify-content-sm-start">
                    <Nav className="px-lg-4 px-md-0 w-75 h-100 align-items-center">
                        <Navbar.Brand href="#home">
                            <img src="./img/Logo.svg"
                                 width="200"
                                 height="60"
                                 className="d-inline-block align-top"
                                 alt="Unison Logo"
                            />
                        </Navbar.Brand>
                        <Nav.Link href="#physical"
                                  className="mx-lg-3 px-lg-3 mx-sm-0 px-sm-0 py-3 text-light"
                                  ref={target1}
                                  onMouseEnter={() => {
                                      setOverlayShow(true);
                                  }}
                                  onMouseLeave={() => {
                                      setOverlayShow(false);
                                  }}
                        >ფიზიკური პირებისთვის
                            <Overlay target={target1.current} show={overlayShow} placement="bottom">
                                {
                                    ({
                                         placement, scheduleUpdate,
                                         arrowProps, outOfBoundaries,
                                         show: overlayShow, ...props
                                     }) =>
                                        (
                                            <div
                                                {...props}
                                                className="mainNavbarOverlay py-4"
                                            >
                                                <div className="px-2"><Health className="overlayIcons" fill="#006A9F"
                                                                              width="1.3rem"/><a>ინდივიდუალური
                                                    ჯანმრთელობის დაზღვევა</a></div>
                                                <div className="px-2"><Car className="overlayIcons" fill="#006A9F"
                                                                           width="1.3rem"/><a>ავტოდაზღვევა
                                                    - პაკეტები</a></div>
                                                <div className="px-2" ref={target2} onMouseEnter={() => {
                                                    setSmallOverlayShow((prevState) => !prevState)
                                                }}>
                                                    <Plane className="overlayIcons" fill="#006A9F" width="1.3rem"/>
                                                    <a>სამოგზაურო დაზღვევა</a>
                                                    <img className="rightArrow"
                                                         src="img/footerIcons/keyboard_arrow_right_black_24dp.svg"/>
                                                </div>
                                                <div className="px-2"><Person className="overlayIcons" fill="#006A9F"
                                                                              width="2rem"/><a>მძღოლის პასუხისმგებლობის
                                                    დაზღვევა</a></div>
                                                <Overlay target={target2.current} show={smallOverlayShow}
                                                         placement="right">
                                                    {
                                                        ({
                                                             placement,
                                                             scheduleUpdate,
                                                             arrowProps,
                                                             outOfBoundaries,
                                                             show: smallOverlayShow,
                                                             ...props
                                                         }) => (
                                                            <div {...props} className="additionalOverlay py-2">
                                                                <div className="px-2 py-2"><a>შემოსული
                                                                    ტურისტებისთვის</a></div>
                                                                <div className="px-2 py-2"><a>გამსვლელი
                                                                    ტურისტებისთვის</a></div>
                                                            </div>
                                                        )}
                                                </Overlay>
                                            </div>
                                        )}
                            </Overlay>
                        </Nav.Link>
                        <Nav.Link href="#judicial" className="mx-3 p-3 text-light ">იურიდიული პირებისთვის</Nav.Link>
                        <Nav.Link href="#obligatory" className="mx-3 p-3 text-light">სავალდებულო დაზღვევა</Nav.Link>
                    </Nav>
                </Container>
                <Nav className="mx-md-1 d-none d-lg-flex">
                    <Account width="3rem" fill="#707070"/>
                    <Nav.Link href="#myaccount" className="text-light w-50">ჩემი კაბინეტი</Nav.Link>
                </Nav>
                <Nav className="callAgentFixed bg-danger d-none d-md-flex py-2 px-3 justify-content-center">
                    <CallAgent width="4em"/>
                    <div><a className="text-light text-decoration-none">აგენტთან დაკავშირება</a></div>
                </Nav>
            </Navbar>
            <Navbar bg="light" className="d-md-flex d-md-none justify-content-center">
                <Nav>
                    <Navbar.Brand href="#home">
                        <img src="./img/Group334.svg"
                             width="150"
                             height="60"
                             className="d-inline-block align-top"
                             alt="MainLogo"
                        />
                    </Navbar.Brand>
                    <GoThreeBars
                        fill="#EE313C"
                        className="burgerButton"
                        onTouchEnd={handleShowCanvas}
                    />
                </Nav>
                <Offcanvas show={showFirstCanvas} onHide={handleCloseCanvas} placement="end" className="w-100 p-3">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <img src="img/insuranceIcons/Group2.svg"/>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar className="mx-md-1 my-0 px-2 d-flex justify-content-between">
                            <Nav.Link href="#myaccount" className="text-secondary d-flex align-items-center py-0 w-50">
                                <MobileAccount height="4rem" fill="white" className="h-100"/>
                                <a className="d-flex align-items-center my-1 px-3 text-decoration-none text-secondary"> ჩემი
                                    კაბინეტი </a>
                            </Nav.Link>
                            <Button variant="danger" className="text-light py-3 rounded-3 fw-bold ">SOS</Button>
                        </Navbar>
                        <div className="my-4 mx-1 fs-5 text-secondary" style={{fontFamily: "BPGArial"}}>
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <MobilePhysical/>
                                <span className="px-3">ფიზიკური პირებისთვის</span>
                                <Arrow/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <MobileJudicial/>
                                <span className="px-3">იურიდიული პირებისთვის</span>
                                <Arrow/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <MobileObligatory/>
                                <span className="px-3">სავალდებულო დაზღვევა</span>
                                <Arrow/>
                            </div>
                        </div>
                        <Button variant="danger" className="text-light px-4 w-100 d-flex justify-content-center">
                            <MobileCallAgent width="4rem" className="h-100 py-2"/>
                            <span style={{fontFamily: "ExtraSquare"}}
                                  className="w-50 my-1 px-3 d-flex align-items-center fs-6">აგენტთან დაკავშირება</span>
                        </Button>
                        <footer className="d-flex my-4">
                            <Row>
                                <Col md={6} className="py-3 d-flex justify-content-between">
                                <a className="w-50 text-decoration-none text-secondary">ჩვენს შესახებ</a>
                                <a className="w-50 text-decoration-none text-secondary">სიახლეები</a>
                                </Col>
                                <Col md={6} className="py-3 d-flex justify-content-between">
                                <a className="w-50 text-decoration-none text-secondary">პარტნიორები</a>
                                <a className="w-50 text-decoration-none text-secondary">კონტაქტი</a>
                                </Col>
                            </Row>
                        </footer>


                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}