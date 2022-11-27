import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";
import {Card, Col, Container, Row} from "react-bootstrap";
import './about-us.scss';
import {ReactComponent as LeftArrow} from "../components/insuranceIcons/arrow-left-circle.svg";
import {ReactComponent as RightArrow} from "../components/insuranceIcons/arrow-right-circle.svg";

export default function AboutUs() {


    return (
        <>
            <TopNavbar showButton={false}/>
            <MainNavbar showButton={true} className='navbarBgImage'/>
            <Container>
                <h1 className="text-light d-flex justify-content-center">ჩვენს შესახებ</h1>
                <p className="text-secondary text-center p-2 my-4">
                    სადაზღვევო კომპანია "უნისონი" დაფუძნდა 2011 წელს და დროის
                    მცირე მონაკვეთში ქართული სადაზღვევო ბაზრის ერთ-ერთ თვალსაჩინო
                    მოთამაშედ იქცა. სადაზღვევო სფეროში, მენეჯმენტის მრავალწლიანი გამოცდილებითა
                    და პროფესიონალიზმით, ძლიერი საერთაშორისო პარტნიორებითა და
                    მრავალფეროვანი პროდუქტებით "უნისონმა" სწრაფად და ადვილად მოიპოვა მომხმარებლის
                    ნდობა და ბაზრის სოლიდური წილი. უნისონი წარმოადგენს დამოუკიდებელ, სხვა ბიზნესებთან
                    არააფილირებულ სადაზღვევო კომპანიას, რაც მომხმარებელს მეტი თავისუფალი არჩევანის
                    საშუალებას აძლევს. უნისონი მომხმარებელს სთავაზობს მაღალი ხარისხის მომსახურებას, პროვაიდერების
                    თავისუფალ არჩევანსა და კონკურენტუნარიან ფასებს.
                </p>
            </Container>
            <Container>
                <div className="d-none d-md-flex flex-column">
                    <h4 className="text-primary text-center">უნისონის ისტორია</h4>
                    <div className="align-self-end my-2">
                        <LeftArrow className="mx-2 cursor-pointer"/>
                        <RightArrow className="mx-2 cursor-pointer"/>
                    </div>
                </div>
            </Container>
            <Container>
                <div id="sliderWrapper" className="d-none d-md-block overflow-scroll">
                    <Row className="d-flex flex-row flex-nowrap align-items-end">
                        <Col lg={4} md={6} className="mx-md-4 mx-xl-2">
                            <Card className="sliderCards  mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">
                                <div>
                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი დაარსდა და საერთაშორისო
                                        გადამზღვევა კომპანიებთან
                                        ურთიერთობამ, საშუალება მოგვცა
                                        პირველივე დღიდან წარმოგვედგინა
                                        პროდუქციის მრავალფეროვანი სპექტრი
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 804.png" className="my-2"/>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1mx-lg-2 px-md-2 p-lg-2 border-0">

                                    <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი იღებს აკრედიტაციას აზერბაიჯანის სახელმწიფოს
                                    ფინანსთა სამინისტროს მიერ და ინიშნება ბაქო-თბილისი
                                    ჯეიჰანის მილსადენის ექსკლუზიურ Მზღვეველად
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 805.png" className="my-2"/>

                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">

                                    <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი აფართოებს მომსახურების არეალს და
                                    ხსნის წარმომადგენლობით ოფისებს ბათუმსა და ფოთში
                                     </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 807.png" className="my-2"/>

                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">

                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი - სადაზღვევო ბაზარზე პირველი - ნერგავს
                                        მობილურ აპლიკაციას, იწყებს ონლაინ გაყიდვებს
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 808.png" className="my-2"/>

                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">

                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი აზღვევს საქართველოს საჰაერო სივრცეს,
                                        იწყებს თანამშრომლობას იუსტიციის სახლთან
                                        და უმხსვილეს ავიაკომპანიასთან
                                        სამოგზაურო დაზღვევის მიმართულებით
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 817.png" className="my-2"/>

                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">
                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი აზღვევს ქვეყნის მასშტაბით უმსხვილეს ინდუსტრიულ
                                        ჯგუფს "ჯორჯიან მანგანეზს"
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 818.png" className="my-2"/>

                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">
                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი ანაზღაურებს აღმოსავლეთ ევროპის მასშტაბით ერთ-ერთ
                                        ყველაზე მსხვილ ზარალს, 73 მლნ აშშ დოლარის ოდენობით
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 820.png" className="my-2"/>

                            </Card>
                        </Col>
                        <Col lg={4} md={6} className="mx-md-4">
                            <Card className="sliderCards mx-xl-1 mx-lg-2  px-md-2 p-lg-2 border-0">
                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი უზრუნველყოფს პანდემიით გამოწვეული
                                        გამოწვევის ეფექტურად მართვას, ყველა სერვისის
                                        დისტანციურ მიწოდებას
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 819.png" className="my-2"/>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer/>
        </>
    )
}