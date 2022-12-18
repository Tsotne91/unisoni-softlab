import {Card, Col, Container, Row} from "react-bootstrap";
import {ReactComponent as LeftArrow} from "../components/insuranceIcons/arrow-left-circle.svg";
import {ReactComponent as RightArrow} from "../components/insuranceIcons/arrow-right-circle.svg";
import {useRef} from "react";

export default function UnisonHistorySlider(){

    const sliderWrapper = useRef();
    const moveSlider = (dir) => sliderWrapper.current.scrollLeft += dir*280;

    return (
        <>
            <Container>
                <div className="unisonHistoryTitle d-flex flex-column">
                    <h4 className="text-primary align-self-center d-inline">უნისონის ისტორია</h4>
                    <div className="align-self-end d-inline-block">
                        <LeftArrow className="mx-2 d-inline cursor-pointer" onClick={()=>moveSlider(-1)}/>
                        <RightArrow className="mx-2 d-inline cursor-pointer" onClick={()=>moveSlider(1)}/>
                    </div>
                </div>
            </Container>
            <Container>
                <div ref={sliderWrapper} className="d-block overflow-hidden">
                    <Row className="d-flex flex-row flex-nowrap align-items-end">
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">
                                <div>
                                    <p className="py-4 px-3 bg-light rounded-3">
                                        უნისონი დაარსდა და საერთაშორისო
                                        გადამზღვევა კომპანიებთან
                                        ურთიერთობამ, საშუალება მოგვცა
                                        პირველივე დღიდან წარმოგვედგინა
                                        პროდუქციის მრავალფეროვანი სპექტრი
                                    </p>
                                    <img src="/img/aboutUsPhotos/Rectangle 804.png" alt="sliderImage" className="my-2"/>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">

                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი იღებს აკრედიტაციას აზერბაიჯანის სახელმწიფოს
                                    ფინანსთა სამინისტროს მიერ და ინიშნება ბაქო-თბილისი
                                    ჯეიჰანის მილსადენის ექსკლუზიურ Მზღვეველად
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 805.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">

                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი აფართოებს მომსახურების არეალს და
                                    ხსნის წარმომადგენლობით ოფისებს ბათუმსა და ფოთში
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 807.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">

                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი - სადაზღვევო ბაზარზე პირველი - ნერგავს
                                    მობილურ აპლიკაციას, იწყებს ონლაინ გაყიდვებს
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 808.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">
                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი აზღვევს საქართველოს საჰაერო სივრცეს,
                                    იწყებს თანამშრომლობას იუსტიციის სახლთან
                                    და უმხსვილეს ავიაკომპანიასთან
                                    სამოგზაურო დაზღვევის მიმართულებით
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 817.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">
                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი აზღვევს ქვეყნის მასშტაბით უმსხვილეს ინდუსტრიულ
                                    ჯგუფს "ჯორჯიან მანგანეზს"
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 818.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">
                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი ანაზღაურებს აღმოსავლეთ ევროპის მასშტაბით ერთ-ერთ
                                    ყველაზე მსხვილ ზარალს, 73 მლნ აშშ დოლარის ოდენობით
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 820.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                        <Col xl={3} lg={4} md={6} sm={8} xs={8} className="mx-xl-3 mx-xs-1 mx-xs-1">
                            <Card className="sliderCards px-md-2 p-lg-2 border-0">
                                <p className="py-4 px-3 bg-light rounded-3">
                                    უნისონი უზრუნველყოფს პანდემიით გამოწვეული
                                    გამოწვევის ეფექტურად მართვას, ყველა სერვისის
                                    დისტანციურ მიწოდებას
                                </p>
                                <img src="/img/aboutUsPhotos/Rectangle 819.png" alt="sliderImage"  className="my-2"/>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}