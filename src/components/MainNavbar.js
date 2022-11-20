import {Container, Nav, Navbar, Overlay} from "react-bootstrap";
import {RiAccountCircleFill} from "react-icons/ri";
import {useRef, useState} from "react";

export default function MainNavbar() {
    const [overlayShow, setOverlayShow] = useState(false);
    const target = useRef(null);

    return (
        <>
        <Navbar bg="primary"  className="d-none d-md-flex px-lg-5 px-md-3 px-sm-1">
            <Container  className="mx-lg-3 mx-md-1 mx-sm-0 justify-content-md-center justify-content-sm-start">
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
                              ref={target}
                    onMouseOver={()=>setOverlayShow(!overlayShow)}
                    >ფიზიკური პირებისთვის</Nav.Link>
                    <Overlay target={target.current} show={overlayShow} placement="bottom">
                        {
                            ({placement, scheduleUpdate,
                                 arrowProps, outOfBoundaries,
                                 show: overlayShow , ...props}) =>
                                (
                                    <div
                                        {...props}
                                        className="mainNavbarOverlay py-4"
                                    >
                                        <div className="p-2"><img src="img/insuranceIcons/health_and_safety_black_48dp.svg"/><a>ინდივიდუალური ჯანმრთელობის დაზღვევა</a></div>
                                        <div className="p-2"><img src="img/insuranceIcons/directions_car_filled_black_48dp.svg"/> <a>ავტოდაზღვევა - პაკეტები</a></div>
                                        <div className="p-2">
                                            <img src="img/insuranceIcons/24px.svg"/>
                                            <a>მძღოლის პასუხისმგებლობის დაზღვევა</a>
                                            <img className="rightArrow" src="img/footerIcons/keyboard_arrow_right_black_24dp.svg"/>
                                        </div>
                                        <div className="p-2"><img src="img/insuranceIcons/flight_takeoff_black_48dp.svg"/> <a>სამოგზაურო დაზღვევა</a></div>
                                    </div>
                                )
                        }
                    </Overlay>


                    <Nav.Link href="#judicial" className="mx-3 px-3 text-light ">იურიდიული პირებისთვის</Nav.Link>
                    <Nav.Link href="#obligatory" className="mx-3 px-3 text-light">სავალდებულო დაზღვევა</Nav.Link>
                </Nav>
            </Container>
                <Nav className="mx-md-1 d-none d-md-flex">
                    <RiAccountCircleFill size="4rem" className="text-light"/>
                <Nav.Link href="#myaccount" className="text-light d-none d-lg-flex w-50">ჩემი კაბინეტი</Nav.Link>
               </Nav>
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