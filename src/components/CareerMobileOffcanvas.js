import {Button, Form, Offcanvas} from "react-bootstrap";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/mobile/Group110.svg";
import {useRef} from "react";

//this should be merged with CareerFormModal.js as the code is repeating

export default function CareerMobileOffcanvas({
                                                  offCanvasShow,
                                                  handleOffcanvasShow,
                                                  onFormSubmit,
                                                  formValues,
                                                  changeHandler
                                              }) {

    const uploadEducation = useRef();
    const uploadExperience = useRef();

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        onFormSubmit && onFormSubmit(formValues);
        console.log(formValues);
        handleOffcanvasShow();
    }

    return (
        <>
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
                    <Form className="px-3 py-2" onSubmit={handleSubmit}>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                სახელი
                                <Form.Control type="text" placeholder="გიორგი" className="py-2"
                                              value={formValues.name}
                                              onChange={changeHandler("name")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                გვარი
                                <Form.Control type="text" placeholder="გიორგაძე" className="py-2"
                                              value={formValues.surname}
                                              onChange={changeHandler("surname")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">
                                ტელეფონი
                                <Form.Control type="number" placeholder="557141587" className="py-2"
                                              value={formValues.phoneNumber}
                                              onChange={changeHandler("phoneNumber")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">ელ-ფოსტა
                                <Form.Control type="email" placeholder="ggiorgadze@gmail.com" className="py-2"
                                              value={formValues.emailAddress}
                                              onChange={changeHandler("emailAddress")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100"> დაბადების თარიღი
                                <Form.Control type="date"/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">რომელ ქალაქში გსურთ
                                მუშაობა?
                                {/*<Form.Select>*/}
                                {/*    <option>თბილისი</option>*/}
                                {/*    <option>ქუთაისი</option>*/}
                                {/*    <option>ბათუმი</option>*/}
                                {/*</Form.Select>*/}
                                <Form.Control type="text" placeholder="ქალაქი" className="py-2"
                                              value={formValues.desiredCity}
                                              onChange={changeHandler("desiredCity")}/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">რა დონის პოზიცია
                                გაინტერესებთ?
                                <Form.Control type="text" placeholder="პოზიცია" className="py-2"
                                              value={formValues.desiredPosition}
                                              onChange={changeHandler("desiredPosition")}
                                />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels text-primary my-2 w-100">სასურველი ანაზღაურება
                                <Form.Control type="text" placeholder="1500₾" className="py-2"/>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels my-2 text-primary w-100">განათლება
                                <Form.Control type="file" ref={uploadEducation} hidden onChange={changeHandler("education")}/>
                                <Button onClick={() => uploadEducation.current.click()} variant="light"
                                        className="mobileFileUploadButton py-2 px-4 w-100 border border-1 rounded-4">
                                    <img src="/img/insuranceIcons/add_circle_black_24dp.svg" alt="uploadButton"
                                         className="mx-3"/>
                                    განათლების დამატება
                                </Button>
                                <div>
                                    {
                                        !formValues.education ? null : formValues.education
                                    }
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <Form.Label className="mobileFormLabels my-2 text-primary w-100">სამუშაო გამოცდილება
                                <Form.Control type="file" ref={uploadExperience} hidden onChange={changeHandler("experience")}/>
                                <Button onClick={() => uploadExperience.current.click()} variant="light"
                                        className="mobileFileUploadButton p-2 w-100 border border-1 rounded-4">
                                    <img src="/img/insuranceIcons/add_circle_black_24dp.svg" alt="uploadButton"
                                         className="mx-3"/>
                                    გამოცდილების დამატება
                                </Button>
                                <div>
                                    {
                                        !formValues.experience ? null : formValues.experience
                                    }
                                </div>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className="mx-2">
                            <p className="text-secondary">
                                მსურს ელ-ფოსტაზე მივიღო კომპანიის მიმდინარე ვაკანსიები და სიახლეები
                            </p>
                            <Form.Check inline label="დიახ" type="radio" name="newsletter" value={"value1"}/>
                            <Form.Check inline label="არა" type="radio" name="newsletter" value={"value2"}/>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-center">
                            <Button className="my-3 mx-1 px-3 py-2 rounded-3 fs-5" type="submit">
                                <img src="/img/insuranceIcons/send_black_24dp.svg" alt="sendIcon"/> გაგზავნა
                            </Button>
                        </Form.Group>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}