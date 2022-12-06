import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Container, Form, Offcanvas} from "react-bootstrap";
import './styles/contact-us.scss';
import Button from "react-bootstrap/Button";
import {useState} from "react";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/mobile/Group110.svg";

export default function ContactUs() {
    const [mobileOffcanvasShow, setMobileOffCanvasShow] = useState(false);

    const handleClose = () => setMobileOffCanvasShow(false);
    const handleShow = () => setMobileOffCanvasShow(true);

    return (
        <>
            <TopNavbar/>
            <MainNavbar showButton={true} className="navbarBgImageContactUs"
                        mobileLogo="./img/insuranceIcons/Logo.svg"/>
            <Container className="d-none d-md-flex flex-md-row justify-content-center">
                <div className="contactInfo mx-4">
                    <div>
                        <h2>კონტაქტი</h2>
                        <h5 className="my-3">საკონტაქტო ინფორმაცია</h5>
                        <div className="my-3 py-3">
                            <img src="/img/insuranceIcons/phoneRed.svg" alt="phone-icon"/>
                            <span className="mx-2 text-secondary fs-6">322 991 991</span>
                            <img src="/img/insuranceIcons/mailRed.svg" alt="mail-icon"/>
                            <span className="mx-2 text-secondary fs-6">unison@unison.ge</span>
                        </div>
                        <div className="my-4">
                            <img src="/img/insuranceIcons/locationRed.svg" alt="location"/>
                            <h6 className="px-2 d-inline">სათავო ოფისი:</h6><br/>
                            <span className="addresses text-secondary">დ. გამრეკელის 19, საბურთალო, თბილისი, 0160, საქართველო</span>
                        </div>
                        <div className="my-4">
                            <img src="/img/insuranceIcons/locationRed.svg" alt="location"/>
                            <h6 className="px-2 d-inline">ბათუმის ოფისი:</h6><br/>
                            <span className="addresses text-secondary">დ. თავდადებულის 31, ბათუმი, საქართველო</span>
                        </div>
                    </div>
                </div>
                <div
                    className="contactUsForm bg-light border border-1 rounded-4 mx-xl-4 mx-lg-1 d-none d-md-inline-block">
                    <Form className="px-4 py-3">
                        <div className="my-4">
                            <h5>დაგვიტოვე წერილი</h5>
                            <span>უნისონი მუდამ მზად არის მოგისმინოთ</span>
                        </div>
                        <Form.Group className="d-flex mx-2">
                            <Form.Label>
                                სახელი გვარი
                                <Form.Control type="text" placeholder="გიორგი გიორგაძე"></Form.Control>
                            </Form.Label>
                            <Form.Label>
                                ტელეფონი
                                <Form.Control type="number" placeholder="557141587"></Form.Control>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label>ელ-ფოსტა</Form.Label>
                            <Form.Control type="email" placeholder="ggiorgadze@gmail.com"/>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label>სათაური</Form.Label>
                            <Form.Control type="text" placeholder="სათაური"/>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label> მოგვწერე</Form.Label>
                            <Form.Control rows={4} as="textarea" placeholder="მინდა მოგახსენოთ..."/>
                        </Form.Group>
                        <Button className="submitButton my-3 mx-1 p-2" type="submit">
                            <img src="/img/insuranceIcons/send_black_24dp.svg" alt="sendIcon"/> გაგზავნა
                        </Button>
                    </Form>
                </div>
            </Container>
            <Container className="contactUsMobile d-block d-md-none">
                <div className="mx-4 my-2">
                    <div>
                        <h2 className="text-center">კონტაქტი</h2>
                        <h4 className="my-3">საკონტაქტო ინფორმაცია</h4>
                        <div className="my-2 py-2">
                            <img src="/img/insuranceIcons/phoneRed.svg" alt="phone-icon" className="my-3"/>
                            <span className="mx-2 text-secondary fs-6">322 991 991</span><br/>
                            <img src="/img/insuranceIcons/mailRed.svg" alt="mail-icon"/>
                            <span className="mx-2 text-secondary fs-6">unison@unison.ge</span>
                        </div>
                        <div className="my-2">
                            <img src="/img/insuranceIcons/locationRed.svg" alt="location"/>
                            <h5 className="px-2 d-inline">სათავო ოფისი:</h5><br/>
                            <p className="addresses text-secondary">დ. გამრეკელის 19, საბურთალო, თბილისი, 0160,
                                საქართველო</p>
                        </div>
                        <div className="my-2">
                            <img src="/img/insuranceIcons/locationRed.svg" alt="location"/>
                            <h5 className="px-2 d-inline">ბათუმის ოფისი:</h5><br/>
                            <p className="addresses text-secondary">დ. თავდადებულის 31, ბათუმი, საქართველო</p>
                        </div>
                    </div>
                    <div className="feedbackMobile my-5">
                        <h4>დაგვიტოვე წერილი</h4>
                        <span className="text-secondary d-block my-3">უნისონი მუდამ მზად არის მოგისმინოთ</span>
                        <Button type="button"
                                variant="primary"
                                className="p-2"
                                onTouchEnd={handleShow}
                        ><img src="/img/insuranceIcons/send_black_24dp.svg" alt="sendIcon" className="px-2"/>
                            მოგვმართეთ</Button>
                    </div>
                </div>
                <Offcanvas show={mobileOffcanvasShow}
                           onHide={handleClose}
                           placement="bottom"
                           backdrop={false}
                           className="contactUsOffcanvas h-75">
                    <Offcanvas.Header className="justify-content-end">
                        <CloseButton className="mx-2" onTouchEnd={handleClose}/>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Form className="px-4 py-3">
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                    სახელი გვარი
                                    <Form.Control type="text" placeholder="გიორგი გიორგაძე" className="py-3"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                    ტელეფონი
                                    <Form.Control type="number" placeholder="557141587" className="py-3"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">ელ-ფოსტა
                                <Form.Control type="email" placeholder="ggiorgadze@gmail.com" className="py-3"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">სათაური
                                <Form.Control type="text" placeholder="სათაური" className="py-3"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100"> მოგვწერეთ
                                <Form.Control rows={4} as="textarea" placeholder="მინდა მოგახსენოთ..."/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center">
                            <Button className="my-3 mx-1 p-3 rounded-4 fs-5" type="submit">
                                <img src="/img/insuranceIcons/send_black_24dp.svg" alt="sendIcon"/> გაგზავნა
                            </Button>
                            </Form.Group>
                        </Form>
                    </Offcanvas.Body>

                </Offcanvas>
            </Container>
            <Footer/>
        </>
    )
}