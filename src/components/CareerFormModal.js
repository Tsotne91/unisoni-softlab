import React, {useRef, useState} from 'react';
import {Col, Form, Modal, Row, Button} from "react-bootstrap";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/Component18–2.svg";

function CareerFormModal({modalShow, onHide, onFormSubmit}) {


    const [formValues, setFormValues] = useState({});
    const uploadEducation = useRef();
    const uploadExperience = useRef();

    const handleSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();
        onFormSubmit && onFormSubmit(formValues);
    }

    return (
        <>
            <Modal show={modalShow}
                   size="xl"
                   className="px-xl-4 px-lg-2"
                   backdrop="false"
            >
                <Modal.Header className="d-flex border border-none">
                    <h5>შეავსეთ ფორმა</h5>
                    <CloseButton onClick={onHide}
                                 className="modalCloseButton"
                    />
                </Modal.Header>
                <Form className="px-xl-4 px-lg-2 border border-none" onSubmit={handleSubmit}>
                    <Row className="px-xl-4 px-lg-2">
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>სახელი</Form.Label>
                                <Form.Control placeholder="გიორგი"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>გვარი</Form.Label>
                                <Form.Control placeholder="გამეზარდაშვილი"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>ტელეფონი</Form.Label>
                                <Form.Control placeholder="557141587"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="px-xl-4 px-lg-2">
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>ელ-ფოსტა</Form.Label>
                                <Form.Control type="email" placeholder="gamezardashvili@comp.ge"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>დაბადების თარიღი</Form.Label>
                                <Form.Control type="date" placeholder="11 / 07 / 86"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>რომელ ქალაქში გსურთ მუშაობა?</Form.Label>
                                <Form.Control placeholder="gamezardashvili@comp.ge"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="px-xl-4 px-lg-2">
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>რა დონის პოზიცია გაინტერესებთ?</Form.Label>
                                <Form.Control placeholder="gamezardashvili@comp.ge"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>რა მიმართულებით გსურთ მუშაობა?</Form.Label>
                                <Form.Control placeholder="თბილისი"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>სასურველი ანაზღაურება</Form.Label>
                                <Form.Control placeholder="1500₾"/>
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row className="px-xl-4 px-lg-2 py-xl-3 py-lg-0">
                        <Form.Group>
                            <Form.Label>განათლება
                                <Form.Control type="file" ref={uploadEducation} hidden/><br/>
                                <Button
                                    onClick={()=>
                                    {   uploadEducation.current.click();
                                    }}
                                    className="addFile lg-2 text-secondary border border-1 rounded-3">
                                    <img src="/img/insuranceIcons/add_circle_black_24dp.svg" alt="uploadButton"
                                         className="mx-2"/>
                                    განათლების დამატება
                                </Button>
                                {/*take value from form value state*/}
                            </Form.Label>
                        </Form.Group>
                    </Row>
                    <Row className="px-xl-4 px-lg-2 py-xl-3 py-lg-0">
                        <Form.Group>
                            <Form.Label>სამუშაო გამოცდილება
                                <Form.Control type="file" ref={uploadExperience} hidden/><br/>
                                <Button
                                    onClick={() => {
                                        uploadExperience.current.click();
                                    }}
                                    className="addFile py-lg-2 text-secondary border border-1 rounded-3">
                                    <img src="/img/insuranceIcons/add_circle_black_24dp.svg" alt="uploadButton"
                                         className="mx-2"/>
                                    სამუშაო გამოცდილების დამატება
                                </Button>
                                <div>

                                </div>
                            </Form.Label>
                        </Form.Group>
                    </Row>
                    <Row className="px-xl-4 px-lg-2 py-xl-3 py-lg-0">
                        <Form.Group className="radioButtons">
                            <h6 className="text-secondary">მსურს ელ-ფოსტაზე მივიღო კომპანიის მიმდინარე ვაკანსიები და
                                სიახლეები</h6>
                            <Form.Check inline label="დიახ" name="group1" type='radio' id={`inline-'radio'-1`}/>
                            <Form.Check inline label="არა" name="group1" type='radio' id={`inline-'radio'-2`}/>
                        </Form.Group>
                    </Row>
                    <Row className="submitButton px-xl-4 px-lg-2 py-xl-3 py-lg-0">
                        <Button
                            type="submit" variant="primary" className="rounded-3 py-2 my-2">
                            <img src="/img/insuranceIcons/send_black_24dp.svg" alt="sendIcon" className="mx-2"/>
                            გაგზავნა
                        </Button>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}

export default CareerFormModal;