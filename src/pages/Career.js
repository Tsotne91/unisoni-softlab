import './styles/career.scss';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import {ReactComponent as LeftArrow} from "../components/insuranceIcons/arrow-left-circle.svg";
import {ReactComponent as RightArrow} from "../components/insuranceIcons/arrow-right-circle.svg";
import {Accordion, Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useRef, useState} from "react";
import CareerFormModal from "../components/CareerFormModal";
import Footer from "../components/Footer";

import FormSubmitted from "../components/FormSubmitted";
import CareerMobileOffcanvas from "../components/CareerMobileOffcanvas";
import MgmtTeam from "../components/MgmtTeam";


export default function Career() {

    /*create one form component which will have the values and states - then insert the form in both modal and canvas*/
    let initialFormValues = {
        name: "",
        surname: "",
        phoneNumber: "",
        emailAddress: "",
        birthDate: "",
        desiredCity: "",
        desiredPosition: "",
        desiredSection: "",
        desiredSalary: "",
        education: "",
        experience: "",
        newsletter: "value2"
    }
    const [formValues, setFormValues] = useState({initialFormValues});
    const [modalShow, setModalShow] = useState(false);
    const [offCanvasShow, setOffCanvasShow] = useState(false);
    const [formSubmittedShow, setFormSubmittedShow] = useState(false);
    const [fileToUpload, setFileToUpload] = useState("")
    const uploadCv = useRef(null);
    const sliderMobileWrapper = useRef();

    const moveSlider = (dir) => sliderMobileWrapper.current.scrollLeft += dir*395;

    const changeHandler = (field) => (event) => {
        setFormValues({...formValues, [field]: event.target.value});
    };

    const onHide = () => setModalShow(false);

    const handleModalShow = () => setModalShow(true);

    const handleOffcanvasShow = () => offCanvasShow ? setOffCanvasShow(false) : setOffCanvasShow(true);

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
                    <CareerFormModal modalShow={modalShow}
                                     onHide={onHide}
                                     onFormSubmit={handleFormSubmittedShow}
                                     changeHandler={changeHandler}
                                     formValues={formValues}
                    />
                    <FormSubmitted
                        formSubmittedShow={formSubmittedShow}
                        onHide={hideFormSubmitted}/>
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
            <MgmtTeam />
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
                    <Form.Control type="file" ref={uploadCv} onChange={(event) => setFileToUpload(event.target.value)}
                                  hidden/>
                    <Button className="p-2 rounded-3" onClick={() => uploadCv.current.click()}>
                        <img src="/img/insuranceIcons/file_upload_black_24dp.svg"
                             alt="upload-icon"
                             className="mx-1"
                        />
                        ატვირთეთ CV
                    </Button>
                    <div>{!fileToUpload ? null : fileToUpload}</div>
                    <p className="my-3"
                       onClick={handleOffcanvasShow}
                    >ან
                        <img src="/img/insuranceIcons/Path 285.svg" alt="icon" className="mx-2"/>
                        <span className="text-decoration-underline">
                        შეავსეთ ფორმა
                      </span>
                    </p>
                </div>
                <div className="careerMgmtTeamMobileHeader d-flex d-md-none flex-wrap mx-2">
                    <h4>მენეჯმენტის გუნდი</h4>
                    <div>
                        <LeftArrow className="sliderArrows mx-2 d-inline" onClick={()=> moveSlider(-1)}/>
                        <RightArrow className="sliderArrows mx-2 d-inline" onClick={()=> moveSlider(1)}/>
                    </div>
                </div>
                <div className="careerMgmtTeamMobile d-block d-md-none overflow-scroll" ref={sliderMobileWrapper}>
                    <Row className="d-flex flex-row flex-nowrap my-4">
                        <Col md={4}>
                            <div>
                                <img src="./img/careerPhotos/mobile/4.jpg" alt="photo"/>
                                <div>
                                    <h5>გიორგი გიორგაძე</h5>
                                    <h6 className="text-secondary">გენერალური დირექტორი</h6>
                                    <p className="text-secondary my-3">
                                        2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო
                                        სამართლის ფაკულტეტი.
                                        ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს. აქვს სადაზღვევო სექტორში მუშაობის
                                        15 წლიანი გამოცდილება.2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში,
                                        სადაც მისი კარიერა კორპორატიული კლიენტების მუშაობის 15 წლიანი
                                        გამოცდილება. 2004 წლიდან მუშაობს.
                                    </p>
                                </div>
                            </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <img src="./img/careerPhotos/mobile/5.jpg" alt="photo"/>
                                    <div>
                                        <h5>გიორგი გიორგაძე</h5>
                                        <h6 className="text-secondary">გენერალური დირექტორი</h6>
                                        <p className="text-secondary my-3">
                                            2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო
                                            სამართლის ფაკულტეტი.
                                            ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს. აქვს სადაზღვევო სექტორში მუშაობის
                                            15 წლიანი გამოცდილება.2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში,
                                            სადაც მისი კარიერა კორპორატიული კლიენტების მუშაობის 15 წლიანი
                                            გამოცდილება. 2004 წლიდან მუშაობს.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div>
                                    <img src="./img/careerPhotos/mobile/6.jpg" alt="photo"/>
                                    <div>
                                        <h5>გიორგი გიორგაძე</h5>
                                        <h6 className="text-secondary">გენერალური დირექტორი</h6>
                                        <p className="text-secondary my-3">
                                            2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო
                                            სამართლის ფაკულტეტი.
                                            ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს. აქვს სადაზღვევო სექტორში მუშაობის
                                            15 წლიანი გამოცდილება.2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში,
                                            სადაც მისი კარიერა კორპორატიული კლიენტების მუშაობის 15 წლიანი
                                            გამოცდილება. 2004 წლიდან მუშაობს.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                    </Row>
                </div>
                <CareerMobileOffcanvas
                    handleOffcanvasShow={handleOffcanvasShow}
                    offCanvasShow={offCanvasShow}
                    changeHandler={changeHandler}
                    onFormSubmit={handleFormSubmittedShow}
                    formValues={formValues}
                />
                <div className="careerInfo my-3">
                    <h5>ინფორმაცია კომპანიის ბენეფიციარების და უშუალო მესაკუთრის შესახებ</h5>
                    <p className="text-secondary">
                        ინფორმაცია მზღვეველის აქციების 10 პროცენტის ან 10 პროცენტზე მეტის მფლობელი უშუალო მესაკუთრის შესახებ ნახვა შეგიძლიათ <a href="#">ბმულზე.</a><br/>
                        ინფორმაცია მზღვეველის მნიშვნელოვანი წილის მფლობელი ბენეფიციარი მესაკუთრის შესახებ ნახვა შეგიძლიათ <a href="#">ბმულზე.</a>
                    </p>
                </div>
            </Container>
            <Footer/>
        </>
)

}