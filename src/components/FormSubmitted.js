import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function FormSubmitted({formSubmittedShow, onHide}){


    return (
        <>
            <Modal show={formSubmittedShow}>
                <Modal.Body>
                    <img src="./img/insuranceIcons/Path 289.svg" alt="icon"/>
                    <h4>თქვენი წერილი მიღებულია</h4>
                    <p>ლორემ იპსუმ დოლორ სიტ ამეტ</p>
                </Modal.Body>
                <Button onClick={onHide}>
                    დასრულება
                </Button>
            </Modal>
        </>
    )
}