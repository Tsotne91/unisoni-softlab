import './styles/career.scss';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import {Accordion, Button, Card, Container, Form} from "react-bootstrap";
import React, {useRef, useState} from "react";
import CareerFormModal from "../components/CareerFormModal";
import Footer from "../components/Footer";

import FormSubmitted from "../components/FormSubmitted";
import CareerMobileOffcanvas from "../components/CareerMobileOffcanvas";


export default function Career() {

    const [modalShow, setModalShow] = useState(false);
    const [offCanvasShow, setOffCanvasShow] = useState(false);
    const [formSubmittedShow, setFormSubmittedShow] = useState(false);
    const [fileToUpload, setFileToUpload] = useState( "")
    const uploadCv = useRef(null);

    const onHide = () => setModalShow(false);

    const handleModalShow = () => setModalShow(true);

    const handleOffcanvasShow = () => {
        offCanvasShow ? setOffCanvasShow(false) : setOffCanvasShow(true);
        console.log(offCanvasShow);
    }

    const handleFormSubmittedShow = (formValues) => {
        setModalShow(false);
        setFormSubmittedShow(true);
    }

    const hideFormSubmitted = () => setFormSubmittedShow(false);

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
                       onClick={handleModalShow}
                    >ან
                        <img src="/img/insuranceIcons/Path 285.svg" alt="icon" className="mx-2"/>
                        <span className="text-decoration-underline">
                        შეავსეთ ფორმა
                      </span>
                    </p>
                    <CareerFormModal modalShow={modalShow} onHide={onHide} onFormSubmit={handleFormSubmittedShow}/>
                    <FormSubmitted formSubmittedShow={formSubmittedShow} onHide={hideFormSubmitted}/>
                </div>
                <div className="ourHrSquadText px-4 py-3 rounded-4 w-50">
                    <h5 className="my-3">ჩვენი HR გუნდი</h5>
                    <p className="text-secondary">“უნისონი” ერთ-ერთი წამყვანი სადაზღვევო კომპანიაა საქართველოში. ამაში
                        კი, უდიდესი წვლილი მისი ლოიალური
                        თანამშრომლების გუნდს მიუძღვის, რომელიც კომპანიას 16 წლის მანძილზე ზრდის და ავითარებს.
                        სწორედ გუნდური და ჯანსაღი გარემოა ის უმნიშვნელოვანესი პირობა, რომლის მეშვეობით,
                        კომპანიამ მოახერხა ბაზარზე საიმედო დამსაქმებლის სახელით პოზიციონირება და გახდა სასურველი,
                        სანდო სადაზღვევო კომპანია თავისი კლიენტებისთვის.<br/> <br/> ადამიანური რესურსების მართვის
                        სტრატეგია ორგანიზაციის
                        ბიზნეს სტრატეგიას ეყრდნობა და ორიენტირებულია გუნდის ეფექტურ მართვაზე, რომელიც ხელს უწყობს
                        კომპანიას ზრდაში, კონკურენტუნარიანობასა და სასურველი შედეგების მიღწევაში.<br/><br/> ჩვენი
                        ადამიანური რესურსების
                        მართვის მიმართულებისთვის პრიორიტეტულია კომფორტული სამუშაო გარემოს შექმნა, თანამშრომლებს
                        შორის მოტივაციის ამაღლება, მათი უნარებისა და პოტენციალის მაქსიმალურად გამოვლინების ხელშეწყობა
                        და ზრუნვა მათ კმაყოფილებასა და განვითარებაზე. ასევე, არანაკლები ყურადღება ეთმობა კომპანიის ზრდის
                        ფონზე, თანამშრომელთა ლოიალობის შენარჩუნებას.<br/><br/> ჩვენი გუნდის გამორჩეული თვისებაა
                        კოლეგიურობა
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
                                    “უნისონი” ერთ-ერთი წამყვანი სადაზღვევო კომპანიაა საქართველოში. ამაში კი, უდიდესი
                                    წვლილი მისი
                                    ლოიალური თანამშრომლების გუნდს მიუძღვის, რომელიც კომპანიას 16 წლის მანძილზე ზრდის და
                                    ავითარებს.
                                    სწორედ გუნდური და ჯანსაღი გარემოა ის უმნიშვნელოვანესი პირობა, რომლის მეშვეობით,
                                    კომპანიამ
                                    მოახერხა ბაზარზე საიმედო დამსაქმებლის სახელით პოზიციონირება და გახდა სასურველი,
                                    სანდო
                                    სადაზღვევო კომპანია თავისი კლიენტებისთვის. ადამიანური რესურსების მართვის სტრატეგია
                                    ორგანიზაციის ბიზნეს სტრატეგიას ეყრდნობა და ორიენტირებულია გუნდის ეფექტურ მართვაზე,
                                    რომელიც ხელს უწყობს კომპანიას ზრდაში, კონკურენტუნარიანობასა და სასურველი შედეგების
                                    მიღწევაში.
                                    ჩვენი ადამიანური რესურსების მართვის მიმართულებისთვის პრიორიტეტულია კომფორტული
                                    სამუშაო გარემოს შექმნა,
                                    თანამშრომლებს შორის მოტივაციის ამაღლება, მათი უნარებისა და პოტენციალის მაქსიმალურად
                                    გამოვლინების
                                    ხელშეწყობა და ზრუნვა მათ კმაყოფილებასა და განვითარებაზე. ასევე, არანაკლები ყურადღება
                                    ეთმობა კომპანიის ზრდის ფონზე,
                                    თანამშრომელთა ლოიალობის შენარჩუნებას. ჩვენი გუნდის გამორჩეული თვისებაა კოლეგიურობა
                                    და ძალიან პოზიტიური ურთიერთთანამშრომლობა. დაკოპირებულია ირაოდან
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <h5 className="my-2">#გახდიუნისონელი</h5>
                    <p className="text-secondary">თუ გსურს შემოუერთდე ჩვენ გუნდს, დაგვიტოვე ინფორმაცია</p>
                    <Form.Control type="file" ref={uploadCv} onChange={(event)=>setFileToUpload(event.target.value)} hidden/>
                    <Button className="p-2 rounded-3" onClick={() => uploadCv.current.click()}>
                        <img src="/img/insuranceIcons/file_upload_black_24dp.svg"
                             alt="upload-icon"
                             className="mx-1"
                        />
                        ატვირთეთ CV
                    </Button>
                    <div className="border border-dark">
                        {
                            !fileToUpload ? null : fileToUpload
                        }
                    </div>
                    <p className="my-3"
                       onClick={handleOffcanvasShow}
                    >ან
                        <img src="/img/insuranceIcons/Path 285.svg" alt="icon" className="mx-2"/>
                        <span className="text-decoration-underline">
                        შეავსეთ ფორმა
                      </span>
                    </p>
                </div>
                <CareerMobileOffcanvas
                    handleOffcanvasShow={handleOffcanvasShow}
                    offCanvasShow={offCanvasShow}
                />
            </Container>
            <Footer/>
        </>
    )

}