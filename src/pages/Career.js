import './styles/career.scss';
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import {Button, Container} from "react-bootstrap";
import {useState} from "react";
import CareerFormModal from "../components/CareerFormModal";
import Footer from "../components/Footer";


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
                       <img src="/img/insuranceIcons/Path 285.svg" alt="icon" className="mx-2"/>
                      <span className="text-decoration-underline">
                        შეავსეთ ფორმა
                      </span>
                   </p>
                    <CareerFormModal modalShow={modalShow} onHide={onHide} />

                </div>
                <div className="ourHrSquad px-4 py-3 rounded-4 w-50">
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
            <Container>

            </Container>
            <Footer/>
        </>
    )

}