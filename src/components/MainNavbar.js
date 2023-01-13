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
import {ReactComponent as PhoneNumber} from "./insuranceIcons/mobile/Subtraction7.svg";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/mobile/Group110.svg";

export default function MainNavbar({showButton, className, mobileLogo}) {
    const [overlayShow, setOverlayShow] = useState(false);
    const [smallOverlayShow, setSmallOverlayShow] = useState(false);
    const [showFirstCanvas, setShowFirstCanvas] = useState(false);
    const [showSecondCanvas, setShowSecondCanvas] = useState(false);
    // const [languageState, setLanguageState] = useState('geo');
    const target1 = useRef(null);
    const target2 = useRef(null);

    const handleShowFirstCanvas = () => setShowFirstCanvas(true);
    const handleCloseFirstCanvas = () => setShowFirstCanvas(false);

    const handleShowSecondCanvas = () => setShowSecondCanvas(true);
    const handleCloseSecondCanvas = () => setShowSecondCanvas(false);

    // const languages = [
    //     { code: 'geo', name: 'ქართული'},
    //     { code: 'eng', name: 'English'},
    //     { code: 'rus', name: 'Русский'}
    // ]

    return (
        <>
            <Navbar className={`mainNavbar d-none d-md-flex px-xxl-5 px-xl-3 px-lg-0 px-md-0 ${className}`}>
                <Container
                    className="mx-xxl-2 mx-xl-0 mx-lg-0 mx-md-0 h-100 justify-content-md-center justify-content-sm-start ">
                    <Nav className="px-xxl-2 px-xl-1 px-lg-0 px-md-0 w-75 h-100 align-items-center forBgImage">
                        <Navbar.Brand href="/">
                            <img src="./img/insuranceIcons/Logo.svg"
                                 width="220"
                                 height="70"
                                 className="d-inline-block align-top"
                                 alt="Unison Logo"
                            />
                        </Navbar.Brand>
                        <Nav.Link href="#physical"
                                  className="mx-xl-2 px-xl-2 mx-lg-1 px-lg-1 mx-sm-0 px-sm-0 py-3 text-light"
                                  ref={target1}
                                  onMouseEnter={() => {
                                      setOverlayShow(true);
                                  }}
                                  onMouseLeave={() => {
                                      setOverlayShow(false);
                                      if (smallOverlayShow) setSmallOverlayShow(false);
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
                                                <div className="px-xl-2 px-lg-0"><Health className="overlayIcons"
                                                                                         fill="#006A9F"
                                                                                         width="1.3rem"/><a>ინდივიდუალური
                                                    ჯანმრთელობის დაზღვევა</a></div>
                                                <div className="px-xl-2 px-lg-0"><Car className="overlayIcons"
                                                                                      fill="#006A9F"
                                                                                      width="1.3rem"/><a>ავტოდაზღვევა
                                                    - პაკეტები</a></div>
                                                <div className="px-xl-2 px-lg-0" ref={target2} onMouseEnter={() => {
                                                    setSmallOverlayShow((prevState) => !prevState)
                                                }}>
                                                    <Plane className="overlayIcons" fill="#006A9F" width="1.3rem"/>
                                                    <a>სამოგზაურო დაზღვევა</a>
                                                    <img className="rightArrow"
                                                         src="img/footerIcons/keyboard_arrow_right_black_24dp.svg"
                                                         alt={"icon"}/>
                                                </div>
                                                <div className="px-xl-2 px-lg-0"><Person className="overlayIcons"
                                                                                         fill="#006A9F"
                                                                                         width="2rem"/><a>მძღოლის
                                                    პასუხისმგებლობის
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
                        <Nav.Link href="#judicial" className="mx-xl-2 px-xl-2 mx-lg-1 px-lg-1 mx-md-0 py-3 text-light">იურიდიული
                            პირებისთვის</Nav.Link>
                        <Nav.Link href="#obligatory"
                                  className="mx-xl-2 px-xl-2 mx-lg-1 px-lg-1 mx-md-0 py-3 text-light">სავალდებულო
                            დაზღვევა</Nav.Link>
                    </Nav>
                </Container>
                <Nav
                    className="mx-md-2 d-none d-lg-flex align-self-start align-items-baseline w-50 rightColumnInsideNavbar">
                    {
                        showButton ? <Button variant="danger"
                                             className="buyOnlineButton text-light d-none d-lg-block align-self-start mx-xl-4 mx-lg-2 mx-md-0 px-xl-2 px-lg-0 rounded-3">
                            <img src="/img/footerIcons/shopping_cart_black_24dp.svg" alt={"icon"} />შეიძინე
                            ონლაინ</Button> : null
                    }

                    <Account width="3rem" fill="#707070"/>
                    <Nav.Link href="#myaccount" className="text-light w-25 align-self-start px-xl-4 px-lg-0">ჩემი
                        კაბინეტი</Nav.Link>
                </Nav>

                <Nav className="callAgentFixed bg-danger d-none d-lg-flex py-2 px-3 justify-content-center">
                    <CallAgent width="4em"/>
                    <div><a className="text-light text-decoration-none">აგენტთან დაკავშირება</a></div>
                </Nav>
            </Navbar>
            <Navbar bg="light"
                    className={`d-flex d-md-none justify-content-center align-items-start ${className}`}>
                <Nav>
                    <Navbar.Brand href="/">
                        <img src={mobileLogo}
                             width="150"
                             height="60"
                             className="d-inline-block align-top"
                             alt="MainLogo"
                        />
                    </Navbar.Brand>
                    <GoThreeBars
                        fill="#EE313C"
                        className="burgerButton"
                        onClick={handleShowFirstCanvas}
                    />
                </Nav>
                <Offcanvas show={showFirstCanvas} placement="end">
                    <Offcanvas.Header>
                        <Offcanvas.Title>
                            <img src="img/insuranceIcons/Group2.svg" alt={"icon"}/>
                        </Offcanvas.Title>
                        <CloseButton onClick={handleCloseFirstCanvas}/>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Navbar className="mx-md-1 my-0 px-2 d-flex justify-content-between">
                            <Nav.Link href="#myaccount" className="text-secondary d-flex align-items-center py-0 w-50">
                                <MobileAccount height="4rem" fill="white" className="h-100"/>
                                <span
                                    className="d-flex align-items-center my-1 px-3 text-decoration-none text-secondary"> ჩემი
                                    კაბინეტი </span>
                            </Nav.Link>
                            <Button variant="danger" className="text-light py-3 rounded-3 fw-bold ">SOS</Button>
                        </Navbar>
                        <div className="my-4 mx-1 fs-5 text-secondary" style={{fontFamily: "BPGArial"}}>
                            <div className="d-flex align-items-center justify-content-between py-3"
                                 onClick={handleShowSecondCanvas}>
                                <MobilePhysical/>
                                <span>ფიზიკური პირებისთვის</span>
                                <Arrow/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <MobileJudicial/>
                                <span>იურიდიული პირებისთვის</span>
                                <Arrow/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between py-3">
                                <MobileObligatory/>
                                <span>სავალდებულო დაზღვევა</span>
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
                                <Col sm={6} className="py-3 d-flex justify-content-between">
                                    <a href="/about-us" className="w-50 text-decoration-none text-secondary">ჩვენს შესახებ</a>
                                    <a className="w-50 text-decoration-none text-secondary">სიახლეები</a>
                                </Col>
                                <Col sm={6} className="py-2 d-flex justify-content-between">
                                    <a className="w-50 text-decoration-none text-secondary">პარტნიორები</a>
                                    <a className="w-50 text-decoration-none text-secondary"
                                       href="/contact-us">კონტაქტი</a>
                                </Col>
                            </Row>
                        </footer>
                        <Row className="d-flex">
                            <Col sm={6} className="py-3 w-50 d-flex justify-content-start">
                                <div> {/*need to add a switcher here*/}
                                    <p><a>ქართული</a></p>
                                    <p><a>English</a></p>
                                    <p><a>Русский</a></p>
                                </div>
                            </Col>
                            <Col sm={6} className="py-3 w-50 d-flex justify-content-end align-items-end">
                                <Row className="align-items-center d-flex">
                                    <div className="justify-content-end"><span>ცხელი ხაზი</span></div>
                                    <div><PhoneNumber/><span className="mobFooterPhoneNumber">2 991 991</span></div>
                                </Row>
                            </Col>
                        </Row>
                    </Offcanvas.Body>
                </Offcanvas>
                <Offcanvas show={showSecondCanvas} placement="end">
                    <Offcanvas.Title className="d-flex justify-content-end">
                        <CloseButton
                            onClick={handleCloseSecondCanvas}
                            className="my-4 mx-3"/>
                    </Offcanvas.Title>
                    <Offcanvas.Body>
                        <div className="my-5 mx-4 text-secondary" style={{fontFamily: "BPGArial"}}>
                            <div className="d-flex align-items-start my-3">
                                <img src="/img/mobileOffcanvasIcons/Group33.svg" className="mx-4" alt={"icon"}/>
                                <p className="d-inline-block w-50">ქონების დაზღვევა</p>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <img src="/img/mobileOffcanvasIcons/Path30.svg" className="mx-4" alt={"icon"}/>
                                <p className="d-inline-block w-50">ინდივიდუალური ჯანმრთელობის დაზღვევა</p>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <img src="/img/mobileOffcanvasIcons/Group12.svg" className="mx-4" alt={"icon"}/>
                                <p className="d-inline-block w-50">ავტოდაზღვევა - პაკეტები</p>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <img src="/img/mobileOffcanvasIcons/Path 36.svg" className="mx-4" alt={"icon"}/>
                                <p className="d-inline-block w-50">მძღოლის პასუხისმგებლობის დაზღვევა</p>
                                <Arrow className="align-self-center"/>
                            </div>
                            <div className="d-flex align-items-start my-3">
                                <img src="/img/mobileOffcanvasIcons/Path 29.svg" className="mx-4" alt={"icon"}/>
                                <p className="d-inline-block w-50">სამოგზაურო დაზღვევა</p>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>
    )
}