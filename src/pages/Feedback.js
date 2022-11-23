import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Feedback() {
    return (
        <>
            <TopNavbar/>
            <MainNavbar showButton={true} className='navbarBgColorStriped'/>
            <div className="d-flex feedbackWrapper">
                <div className="d-flex w-75 my-4 mx-2 justify-content-end">
                    <div className="w-75">
                        <h3 style={{fontFamily: "ExtraSquare"}} className="mx-4 my-3 text-secondary">მომხმარებლის ხმა</h3>
                        <Form className="mx-4">
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Label className="feedbackFormLabel my-2">სახელი</Form.Label>
                                    <Form.Control type="text" placeholder="გიორგი"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className="feedbackFormLabel my-2">გვარი</Form.Label>
                                    <Form.Control type="text" placeholder="გამეზარდაშვილი"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Label className="feedbackFormLabel my-2">პირადი ნომერი</Form.Label>
                                    <Form.Control type="number" placeholder="0101293847"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className="feedbackFormLabel my-2">პოლისის ნომერი</Form.Label>
                                    <Form.Control type="text" placeholder="HI-001/17"/>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Label className="feedbackFormLabel my-2">ტელეფონი</Form.Label>
                                    <Form.Control type="number" placeholder="557141587"/>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className="feedbackFormLabel my-2">ელ-ფოსტა</Form.Label>
                                    <Form.Control type="email" placeholder="gamezardashvili@comp.ge"/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className="feedbackFormLabel my-2">მისამართი</Form.Label>
                                    <Form.Control type="text" placeholder="პოლიტკოვსკაიას 31, ბინა 94"/>
                                </Form.Group>
                            </Row>
                            <div>
                                <Form.Label className="feedbackFormLabel my-2">პასუხის წერილი</Form.Label><br/>
                                <Form.Check inline name="feedback" type={'radio'} label={'ავიღებ უნისონის ოფისში'}/>
                                <Form.Check inline name="feedback" type={'radio'} label={'მომიტანოს კურიერმა'}/>
                                <Form.Check inline name="feedback" type={'radio'} label={'მივიღებ ელ-ფოსტით'}/>
                            </div>
                            <Row>
                                <Form.Group className="my-3">
                                    <Form.Label className="feedbackFormLabel my-2">აღწერეთ თქვენი პრეტენზიის
                                        შინაარსი</Form.Label>
                                    <Form.Control as="textarea" placeholder="პრეტენზიის შინაარსი" rows={6}/>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                <img src="img/insuranceIcons/send_black_24dp.svg" className="mx-1 rounded-2"/>
                                გაგზავნა
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="sideInfoContainer w-25 my-5 mx-3 px-3">

                    <h3 className="feedbackFormLabel my-2 align-items-center">
                        <img src="/img/insuranceIcons/info_black_24dp.svg"
                        className="mx-2"/>
                        ინფორმაცია
                    </h3>
                    <p className="info text-secondary">გთხოვთ შეავსოთ კითხვარი და გაგვიზიაროთ თქვენი აზრი ჩვენს შესახებ.
                        ჩვენ ორიენტირებულები ვართ თქვენს მაქსიმალურ კმაყოფილებაზე და
                        მნიშვნელოვანია თითოეული თქვენგანის უკუკავშირი <br/><br/>

                        გაეცანით პრეტენზიების განხილვის ინსტრუქციას.
                        <u>იხილეთ მიმაგრებული ფაილი</u>.<br/><br/>

                        პრეტენზიის მიღებიდან არაუმეტეს 2 სამუშაო დღეში,
                        მოგაწვდით ინფორმაციას თქვენს შეტყობინებაზე პასუხისმგებელი
                        პირისა და დამატებით წარმოსადგენი დოკუმენტაციის შესახებ;<br/><br/>

                        10 სამუშაო დღის ვადაში მიიღებთ ამომწურავ
                        პასუხს თქვენს პრეტენზიაზე;<br/><br/>

                        იმ შემთხვევაში, თუ ზემოხსენებულ ვადაში ვერ
                        ვახერხებთ ამომწურავი პასუხის მოწოდებას, გატყობინებთ
                        მიზეზს და მაქსიმალურ ვადას.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    )
}