import React from 'react';
import {Col, Form, Modal, Row} from "react-bootstrap";
import {ReactComponent as CloseButton} from "../components/insuranceIcons/Component18–2.svg";

function CareerFormModal({modalShow, onHide}) {

    return (
        <>
            <Modal show={modalShow}
                   size="xl"
                   className="px-xl-4 px-lg-2"
           >
                <Modal.Header className="d-flex border-none">
                    <span>შეავსეთ ფორმა</span>
                    <CloseButton onClick={onHide}
                                 className="modalCloseButton"
                    />
                </Modal.Header>
                <Form  className="px-xl-4 px-lg-2 border-none">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupFirstName">
                                <Form.Label>სახელი</Form.Label>
                                <Form.Control placeholder="გიორგი"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupLastName">
                                <Form.Label>გვარი</Form.Label>
                                <Form.Control placeholder="გამეზარდაშვილი"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupPhoneNumber">
                                <Form.Label>ტელეფონი</Form.Label>
                                <Form.Control placeholder="557141587"/>
                            </Form.Group>
                        </Col>

                    </Row>
                </Form>
            </Modal>
        </>
    );
}

export default CareerFormModal;