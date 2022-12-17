import './styles/career.scss';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import {Accordion, Button, Card, Container, Form, Offcanvas} from "react-bootstrap";
import {useRef, useState} from "react";
import CareerFormModal from "../components/CareerFormModal";
import Footer from "../components/Footer";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/mobile/Group110.svg";


export default function Career() {

    const [modalShow, setModalShow] = useState(false);
    const [offCanvasShow, setOffCanvasShow] = useState(false);
    const uploadButtonRef1 = useRef();
    const uploadButtonRef2 = useRef();


    const onHide = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    const handleOffcanvasShow = () => offCanvasShow ? setOffCanvasShow(false) : setOffCanvasShow(true);


    return (
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className="navbarBgImageCareer" mobileLogo="./img/insuranceIcons/Logo.svg"/>
            <Container className="d-none d-md-flex flex-md-row justify-content-center">
                <div className="careerMain mx-4">
                    <h2>კარიერა</h2>
                    <h5 className="my-2">#გახდიუნისონელი</h5>
                    <p>თუ გსურს შემოუერთდე ჩვენ გუნდს, დაგვიტოვე ინფორმაცია</p>
                   <Button className="p-2 rounded-3">
                       <img src="/img/insuranceIcons/file_upload_black_24dp.svg"
                            alt="upload-icon"
                            className="mx-1"
                       />
                       ატვირთეთ CV
                   </Button>
                   <p className="my-3"
                    onClick={handleShow}
                   >ან
                       <img src="/img/insuranceIcons/Path 285.svg" alt="icon" className="mx-2"/>
                      <span className="text-decoration-underline">
                        შეავსეთ ფორმა
                      </span>
                   </p>
                    <CareerFormModal modalShow={modalShow} onHide={onHide} />
                </div>
                <div className="ourHrSquadText px-4 py-3 rounded-4 w-50">
                    <h5 className="my-3">ჩვენი HR გუნდი</h5>
                    <p className="text-secondary">“უნისონი” ერთ-ერთი წამყვანი სადაზღვევო კომპანიაა საქართველოში. ამაში კი, უდიდესი წვლილი მისი ლოიალური
                        თანამშრომლების გუნდს მიუძღვის, რომელიც კომპანიას 16 წლის მანძილზე ზრდის და ავითარებს.
                        სწორედ გუნდური და ჯანსაღი გარემოა ის უმნიშვნელოვანესი პირობა, რომლის მეშვეობით,
                        კომპანიამ მოახერხა ბაზარზე საიმედო დამსაქმებლის სახელით პოზიციონირება და გახდა სასურველი,
                        სანდო სადაზღვევო კომპანია თავისი კლიენტებისთვის.<br/> <br/> ადამიანური რესურსების მართვის სტრატეგია ორგანიზაციის
                        ბიზნეს სტრატეგიას ეყრდნობა და ორიენტირებულია გუნდის ეფექტურ მართვაზე, რომელიც ხელს უწყობს
                        კომპანიას ზრდაში, კონკურენტუნარიანობასა და სასურველი შედეგების მიღწევაში.<br/><br/> ჩვენი ადამიანური რესურსების
                        მართვის მიმართულებისთვის პრიორიტეტულია კომფორტული სამუშაო გარემოს შექმნა, თანამშრომლებს
                        შორის მოტივაციის ამაღლება, მათი უნარებისა და პოტენციალის მაქსიმალურად გამოვლინების ხელშეწყობა
                        და ზრუნვა მათ კმაყოფილებასა და განვითარებაზე. ასევე, არანაკლები ყურადღება ეთმობა კომპანიის ზრდის
                        ფონზე, თანამშრომელთა ლოიალობის შენარჩუნებას.<br/><br/> ჩვენი გუნდის გამორჩეული თვისებაა კოლეგიურობა
                        და ძალიან პოზიტიური ურთიერთთანამშრომლობა. დაკოპირებულია ირაოდან</p>
                    </div>
            </Container>
            <Container className="careerMgmtTeam d-none d-md-flex border border-2">
                   <Card className="mx-2">
                       <Card.Img variant="left" src="./img/careerPhotos/1.jpg"/>
                       <Card.Body>
                           <Card.Title>გიორგი გიორგაძე</Card.Title>
                           <h6 className="text-secondary">გენერალური დირექტორი</h6>
                           <Card.Text className="p-3">
                               2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი.
                               ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს.
                                აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი გამოცდილება.
                                2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში,
                               სადაც მისი კარიერა კორპორატიული კლიენტების…
                           </Card.Text>
                       </Card.Body>
                   </Card>
                   <Card className="mx-2">
                       <Card.Img variant="left" src="./img/careerPhotos/2.jpg"/>
                       <Card.Body>
                           <Card.Title>გიორგი გიორგაძე</Card.Title>
                           <h6 className="text-secondary">გენერალური დირექტორი</h6>
                           <Card.Text className="p-3">
                               2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი.
                               ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს.
                               აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი გამოცდილება.
                               2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში,
                               სადაც მისი კარიერა კორპორატიული კლიენტების…
                           </Card.Text>
                       </Card.Body>
                   </Card>
                   <Card className="mx-2">
                       <Card.Img variant="left" src="./img/careerPhotos/3.jpg"/>
                       <Card.Body>
                           <Card.Title>გიორგი გიორგაძე</Card.Title>
                           <h6 className="text-secondary">გენერალური დირექტორი</h6>
                           <Card.Text className="p-3">
                               2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი.
                               ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს.
                               აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი გამოცდილება.
                               2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში,
                               სადაც მისი კარიერა კორპორატიული კლიენტების…
                           </Card.Text>
                       </Card.Body>
                   </Card>
            </Container>
            <Container>
                <div className="careerMobile d-block d-md-none text-center">
                    <h3>კარიერა</h3>
                    <Accordion className="rounded-4">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                            ჩვენი HR გუნდი
                            </Accordion.Header>
                            <Accordion.Body>
                                <div className="mobileAccordionText text-start text-secondary">
                                “უნისონი” ერთ-ერთი წამყვანი სადაზღვევო კომპანიაა საქართველოში. ამაში კი, უდიდესი წვლილი მისი
                                ლოიალური თანამშრომლების გუნდს მიუძღვის, რომელიც კომპანიას 16 წლის მანძილზე ზრდის და ავითარებს.
                                სწორედ გუნდური და ჯანსაღი გარემოა ის უმნიშვნელოვანესი პირობა, რომლის მეშვეობით, კომპანიამ
                                მოახერხა ბაზარზე საიმედო დამსაქმებლის სახელით პოზიციონირება და გახდა სასურველი, სანდო
                                სადაზღვევო კომპანია თავისი კლიენტებისთვის. ადამიანური რესურსების მართვის სტრატეგია
                                ორგანიზაციის ბიზნეს სტრატეგიას ეყრდნობა და ორიენტირებულია გუნდის ეფექტურ მართვაზე,
                                რომელიც ხელს უწყობს კომპანიას ზრდაში, კონკურენტუნარიანობასა და სასურველი შედეგების მიღწევაში.
                                ჩვენი ადამიანური რესურსების მართვის მიმართულებისთვის პრიორიტეტულია კომფორტული სამუშაო გარემოს შექმნა,
                                თანამშრომლებს შორის მოტივაციის ამაღლება, მათი უნარებისა და პოტენციალის მაქსიმალურად გამოვლინების
                                ხელშეწყობა და ზრუნვა მათ კმაყოფილებასა და განვითარებაზე. ასევე, არანაკლები ყურადღება ეთმობა კომპანიის ზრდის ფონზე,
                                თანამშრომელთა ლოიალობის შენარჩუნებას. ჩვენი გუნდის გამორჩეული თვისებაა კოლეგიურობა
                                და ძალიან პოზიტიური ურთიერთთანამშრომლობა. დაკოპირებულია ირაოდან
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h5 className="my-2">#გახდიუნისონელი</h5>
                    <p className="text-secondary">თუ გსურს შემოუერთდე ჩვენ გუნდს, დაგვიტოვე ინფორმაცია</p>
                    <Button className="p-2 rounded-3">
                        <img src="/img/insuranceIcons/file_upload_black_24dp.svg"
                             alt="upload-icon"
                             className="mx-1"
                        />
                        ატვირთეთ CV
                    </Button>
                    <p className="my-3"
                       onClick={handleOffcanvasShow}
                    >ან
                        <img src="/img/insuranceIcons/Path 285.svg" alt="icon" className="mx-2"/>
                        <span className="text-decoration-underline">
                        შეავსეთ ფორმა
                      </span>
                    </p>
                </div>
                <Offcanvas show={offCanvasShow}
                           onHide={handleOffcanvasShow}
                           placement="bottom"
                           backdrop={false}
                           className="careerOffcanvas h-75">
                    <Offcanvas.Header className="justify-content-between fs-5 px-4">
                        შეავსეთ ფორმა
                        <CloseButton className="mx-2" onClick={handleOffcanvasShow}/>
                    </Offcanvas.Header>

                    <Offcanvas.Body>
                        <Form className="px-3 py-2">
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                    სახელი გვარი
                                    <Form.Control type="text" placeholder="გიორგი გიორგაძე" className="py-2"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                    ტელეფონი
                                    <Form.Control type="number" placeholder="557141587" className="py-2"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">ელ-ფოსტა
                                    <Form.Control type="email" placeholder="ggiorgadze@gmail.com" className="py-2"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">სათაური
                                    <Form.Control type="text" placeholder="სათაური" className="py-2"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100"> დაბადების თარიღი
                                    <Form.Control type="date"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">რომელ ქალაქში გსურთ მუშაობა?
                                    <Form.Select>
                                        <option>თბილისი</option>
                                        <option>ქუთაისი</option>
                                        <option>ბათუმი</option>
                                    </Form.Select>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">რა დონის პოზიცია გაინტერესებთ?
                                    <Form.Control type="text" placeholder="პოზიცია" className="py-2"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels text-primary my-2 w-100">სასურველი ანაზღაურება
                                    <Form.Control type="text" placeholder="257" className="py-2"/>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels my-2 text-primary w-100">განათლება
                                        <Form.Control type="file" ref={uploadButtonRef1} hidden/>
                                        <Button onClick={()=> uploadButtonRef1.current.click()} variant="light" className="mobileFileUploadButton py-2 px-4 w-100 border border-1 rounded-4">
                                            <img src="/img/insuranceIcons/add_circle_black_24dp.svg" alt="uploadButton" className="mx-3"/>
                                            განათლების დამატება
                                        </Button>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <Form.Label className="mobileFormLabels my-2 text-primary w-100">სამუშაო გამოცდილება
                                    <Form.Control type="file" ref={uploadButtonRef2} hidden/>
                                    <Button onClick={()=> uploadButtonRef2.current.click()} variant="light" className="mobileFileUploadButton p-2 w-100 border border-1 rounded-4">
                                        <img src="/img/insuranceIcons/add_circle_black_24dp.svg" alt="uploadButton" className="mx-3"/>
                                        გამოცდილების დამატება
                                    </Button>
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="mx-2">
                                <p className="text-secondary">
                                    მსურს ელ-ფოსტაზე მივიღო კომპანიის მიმდინარე ვაკანსიები და სიახლეები
                                </p>
                                <Form.Check inline label="დიახ" type="radio" name="newsletter" />
                                <Form.Check inline label="არა" type="radio" name="newsletter" />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center">
                                <Button className="my-3 mx-1 px-3 py-2 rounded-3 fs-5" type="submit">
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