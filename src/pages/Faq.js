import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Accordion, Container} from "react-bootstrap";


export default function Faq(){
    return(
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className='navbarBgColorStripedDesktop' mobileLogo="./img/insuranceIcons/Group334.svg" />
            <Container className="faq">
                <h3 className="text-secondary my-4">ხშირად დასმული კითხვები</h3>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>სად მდებარეობს თქვენი ოფისი?</Accordion.Header>
                        <Accordion.Body>
                            დ. გამრეკელის 19, საბურთალო, თბილისი, 0160, საქართველო
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>რისი დაზღვევა გაქვთ?</Accordion.Header>
                        <Accordion.Body>
                            ჩვენი პორტფოლიო მრავალფეროვანია და შეგვიძლია
                            შემოგთავაზოთ სრული სადაზღვევო მომსახურება როგორც თქვენთვის,
                            ისე თქვენი ბიზნესისთვის. თუმცა, არის პროდუქტები რომლებიც
                            განსაკუთრებით გვიყვარს. ეს სადაზღვევო პროდუქტებია:
                            ჯანმრთელობის დაზღვევა, ავტომობილების დაზღვევა,
                            ქონების დაზღვევა, სიცოცხლის დაზღვევა, აგროდაზღვევა,
                            ექიმთა პასუხისმგებლობის დაზღვევა, ფინანსური რისკების
                            დაზღვევა და სამოგზაურო დაზღვევა (როგორც გამსვლელი,
                            ისე შემომსვლელი ტურისტების).
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>რომელია თქვენი პროვაიდერი კლინიკები და ფარმაცევტული სახლები?</Accordion.Header>
                        <Accordion.Body>Lorem Ipsum</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>რომელია თქვენი პროვაიდერი ავტოსახელოსნოები?</Accordion.Header>
                        <Accordion.Body>Lorem Ipsum</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>როგორ დაგიკავშირდეთ?</Accordion.Header>
                        <Accordion.Body>Lorem Ipsum</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>როგორ შეიძლება დაზღვევის შეძენა?</Accordion.Header>
                        <Accordion.Body>Lorem Ipsum</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>რა ასაკიდან ხდება დაზღვევა?</Accordion.Header>
                        <Accordion.Body>Lorem Ipsum</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>სად შემიძლია ავტომანქანის გარეცხვა?</Accordion.Header>
                        <Accordion.Body>Lorem Ipsum</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <Footer/>
        </>
    )
}