import './styles/career.scss';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import {Button, Container} from "react-bootstrap";
import {useState} from "react";
import CareerFormModal from "../components/CareerFormModal";


export default function Career() {

    const [modalShow, setModalShow] = useState(false);

    const onHide = () => setModalShow(false);
     const handleShow = () => setModalShow(true);


    return (
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className="navbarBgImageCareer" mobileLogo="./img/insuranceIcons/Logo.svg"/>
            <Container className="d-none d-md-flex flex-md-row justify-content-center">
                <div className="careerMain mx-4">
                    <h2>კონტაქტი</h2>
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
                      <span className="mx-2">
                       <img src="/img/insuranceIcons/Path 285.svg" alt="icon"/> შეავსეთ ფორმა
                      </span>
                   </p>
                    <CareerFormModal modalShow={modalShow} onHide={onHide} />

                </div>
                <div>

                </div>

            </Container>
        </>
    )

}