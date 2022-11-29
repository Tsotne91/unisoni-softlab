import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Container, Form} from "react-bootstrap";
import './styles/contact-us.scss'

export default function ContactUs() {
    return (
        <>
            <TopNavbar/>
            <MainNavbar showButton={true} className="navbarBgImageContactUs"/>
            <Container>
                <div className="contactInfo d-flex flex-row">
                    <div>
                        <h2>კონტაქტი</h2>
                        <h5 className="my-3">საკონტაქტო ინფორმაცია</h5>
                        <div className="my-3 py-3">
                            <img src="/img/insuranceIcons/phoneRed.svg" alt="phone-icon"/>
                            <span className="mx-3">322 991 991</span>
                            <img src="/img/insuranceIcons/mailRed.svg" alt="mail-icon"/>
                            <span className="mx-3">unison@unison.ge</span>
                        </div>
                        <div className="my-4">
                            <img src="/img/insuranceIcons/locationRed.svg" alt="location"/>
                            <span className="px-2" style={{fontFamily: "Mtavruli"}}>სათავო ოფისი:</span><br/>
                            <span className="addresses">დ. გამრეკელის 19, საბურთალო, თბილისი, 0160, საქართველო</span>
                        </div>
                        <div className="my-4">
                            <img src="/img/insuranceIcons/locationRed.svg" alt="location"/>
                            <span className="px-2" style={{fontFamily: "Mtavruli"}}>ბათუმის ოფისი:</span><br/>
                            <span className="addresses">დ. თავდადებულის 31, ბათუმი, საქართველო</span>
                        </div>
                    </div>
                    <div>
                        <Form className="contactUsForm border border-1 p-3">
                            <h3>დაგვიტოვე წერილი</h3>
                            <h6>უნისონი მუდამ მზად არის მოგისმინოთ</h6>
                            <Form.Group>
                                <Form.Label>
                                    სახელი გვარი
                                    <Form.Control type="text" placeholder="გიორგი გიორგაძე"></Form.Control>
                                </Form.Label>
                                <Form.Label>
                                    ტელეფონი
                                    <Form.Control type="number" placeholder="557141587"></Form.Control>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>ელ-ფოსტა</Form.Label>
                                <Form.Control type="email" placeholder="ggiorgadze@gmail.com" />
                            </Form.Group>

                        </Form>

                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}