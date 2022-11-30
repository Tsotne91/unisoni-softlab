import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Container, Form} from "react-bootstrap";
import './styles/contact-us.scss';
import Button from "react-bootstrap/Button";

export default function ContactUs() {
    return (
        <>
            <TopNavbar/>
            <MainNavbar showButton={true} className="navbarBgImageContactUs"/>
            <Container className="d-flex flex-row justify-content-center">
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
                <div className="contactUsForm bg-light border border-1 rounded-4 mx-xl-4 mx-lg-1 d-none d-md-inline-block">
                    <Form className="px-4 py-3">
                        <div className="my-4">
                            <h5>დაგვიტოვე წერილი</h5>
                            <span>უნისონი მუდამ მზად არის მოგისმინოთ</span>
                        </div>
                        <Form.Group className="mx-2">
                            <Form.Label>
                                სახელი გვარი
                                <Form.Control type="text" placeholder="გიორგი გიორგაძე"></Form.Control>
                            </Form.Label>
                            <Form.Label className="mx-2">
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
            <Footer/>
        </>
    )
}