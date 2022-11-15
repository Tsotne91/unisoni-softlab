import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {RiAccountCircleFill} from "react-icons/ri"


export default function MainNavbar() {
    // const [show, setShow] = useState(false);
    // const target = useRef(null);

    return (
        <>
        <Navbar bg="primary"  className="d-none d-md-flex px-lg-5 px-md-3 px-sm-1">
            <Container  className="mx-lg-3 mx-md-1 mx-sm-0 justify-content-md-center justify-content-sm-start">
                <Nav className="px-lg-4 px-md-0 w-75">
                    <Navbar.Brand href="#home">
                        <img src="./img/Logo.svg"
                             width="150"
                             height="60"
                             className="d-inline-block align-top"
                             alt="Unison Logo"
                        />
                    </Navbar.Brand>
                    <Nav.Link
                        // ref={target} onMouseOver={() => setShow(!show)}
                              href="#physical" className="mx-lg-3 px-lg-3 mx-sm-0 px-sm-0 text-light">ფიზიკური პირებისთვის</Nav.Link>
                    {/*<Overlay target={target.current} show={show} placement='bottom'> {*/}
                    {/*    ({show, scheduleUpdate, arrowProps, outOfBoundaries, placement, popper, ...props}) => (*/}
                    {/*        <div*/}
                    {/*            {...props}*/}
                    {/*            style={{*/}
                    {/*                position: 'absolute',*/}
                    {/*                right: '5rem',*/}
                    {/*                top: '4rem',*/}
                    {/*                width: '23rem',*/}
                    {/*                textAlign: 'center',*/}
                    {/*                fontSize: "0.8rem",*/}
                    {/*                padding: '0.4rem 1rem',*/}
                    {/*                borderRadius: 5,*/}
                    {/*                ...props.style,*/}
                    {/*            }}*/}
                    {/*        >*/}
                    {/*            <div className="py-2"><a style={{textDecoration:"none"}}>ინდივიდუალური ჯანმრთელობის დაზღვევაა</a></div>*/}
                    {/*            <div className="py-2"><a style={{textDecoration:"none"}}>ავტოდაზღვევა - პაკეტები</a></div>*/}
                    {/*            <div className="py-2"><a style={{textDecoration:"none"}}>მძღოლის პასუხისმგებლობის დაზღვევა</a></div>*/}
                    {/*            <div className="py-2"><a style={{textDecoration:"none"}}>სამოგზაურო დაზღვევა</a></div>*/}

                    {/*        </div>*/}


                    {/*    )}*/}


                    {/*</Overlay>*/}
                    <Nav.Link href="#judicial" className="mx-3 px-3 text-light ">იურიდიული პირებისთვის</Nav.Link>
                    <Nav.Link href="#obligatory" className="mx-3 px-3 text-light">სავალდებულო დაზღვევა</Nav.Link>
                </Nav>
            </Container>
                <Nav className="mx-md-1 d-none d-md-flex">
                    <RiAccountCircleFill size="4rem" className="text-light"/>
                <Nav.Link href="#myaccount" className="text-light d-none d-lg-flex w-75">ჩემი კაბინეტი</Nav.Link>
               </Nav>
        </Navbar>
        <Navbar bg="light" className="d-md-flex d-md-none">
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