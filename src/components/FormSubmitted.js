import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function FormSubmitted({formSubmittedShow, onHide}){


    return (
        <>
            <Modal show={formSubmittedShow} className="formSubmitted">
                <Modal.Body>
                    <div className="text-center py-3">
                        <img src="./img/insuranceIcons/Path 289.svg" alt="icon"/>
                        <h4 className="my-3">თქვენი წერილი მიღებულია</h4>
                        <p>ლორემ იპსუმ დოლორ სიტ ამეტ</p>
                        <Button onClick={onHide} variant="outline-secondary" className="w-50 my-3 py-2">
                            დასრულება
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}