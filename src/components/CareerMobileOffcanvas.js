import {Button, Form, Offcanvas} from "react-bootstrap";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/mobile/Group110.svg";
import {useRef} from "react";

export default function CareerMobileOffcanvas({offCanvasShow, handleOffcanvasShow}){

    const uploadButtonRef1 = useRef();
    const uploadButtonRef2 = useRef();



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
        </>
    )
}