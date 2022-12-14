import {Card, Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function InsuranceCards() {

    return (
        <div className="insuranceCardsComponent">
            <Container className="d-flex justify-content-center">
                <Row className="justify-content-center">
                    <Card className="insuranceCards">
                        <img src="img/insuranceIcons/house.svg" className="insuranceCardIcons"/>
                        <span>ქონების<br/>
                     დაზღვევა</span>
                    </Card>
                    <Card className="insuranceCards">
                        <img src="img/insuranceIcons/health_and_safety_black_48dp.svg"/>
                        <span>ჯანმრთელობის<br/>
                     დაზღვევა</span>
                    </Card>
                    <Card className="insuranceCards">
                        <img src="img/insuranceIcons/directions_car_filled_black_48dp.svg"/>
                        <span>ავტომობილის<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card className="insuranceCards">
                        <img src="img/insuranceIcons/how_to_reg_black_24dp.svg"/>
                        <span>პასუხისმგებლობის<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card className="insuranceCards">
                        <img src="img/insuranceIcons/flight_takeoff_black_48dp.svg"/>
                        <span>სამოგზაურო<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card className="d-flex d-md-none insuranceCards">
                        <img src="img/insuranceIcons/Path 218.svg"/>
                        <span>შეიძინე<br/>
                    ონლაინ
                </span>
                    </Card>
                    <Button variant="danger"
                            className="w-75 my-3 py-2 fs-3 d-md-none d-flex text-light justify-content-center">SOS</Button>
                </Row>
            </Container>
            <Container className="d-none d-md-flex" fluid>
                <Col className="d-md-inline-block border border-0">

                    <h2 style={{fontFamily: "ExtraSquare", textAlign: "center", marginTop: "3rem"}}>უპირატესობები</h2>
                    <Row className="d-flex justify-content-center">
                        <Card bg="transparent" className="advantages">
                            <img src="./img/advantagesIcons/consumer.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>მომხმარებლის კმაყოფილების 96%-იანი დონე</span>
                        </Card>
                        <Card bg="transparent" className="advantages">
                            <img src="./img/advantagesIcons/stars.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>მაღალრეიტინგული გადამზღვევი კომპანიები</span>
                        </Card>
                        <Card bg="transparent" className="advantages">
                            <img src="./img/advantagesIcons/touch_app_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>თანამედროვე ელექტრონული სერვისები</span>
                        </Card>
                        <Card bg="transparent" className="advantages">
                            <img src="./img/advantagesIcons/timer_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>ზარალის დარეგულირების უმოკლესი ვადები</span>
                        </Card>
                        <Card bg="transparent" className="advantages">
                            <img src="./img/advantagesIcons/people_outline_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>კორპორატიული კლიენტების ფართო სპექტრი</span>
                        </Card>
                        <Card bg="transparent" className="advantages">
                            <img src="./img/advantagesIcons/auto_awesome_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>გუნდის პროფესიონალიზმი და მრავალწლიანი გამოცდილება</span>
                        </Card>
                    </Row>
                </Col>
            </Container>
            <Container className="d-flex d-md-none text-center">
                <Row>
                    <hr className="w-50 m-auto my-4"/>
                    <h4 style={{fontFamily: "ExtraSquare", fontSize: "2rem"}}>უპირატესობები</h4>
                    <Card className="w-50 p-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/consumer.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-2">32067</span>
                        <span>კმაყოფილი მომხმარებელი</span>
                    </Card>
                    <Card className="w-50 p-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/business_black_24dp.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-2">5</span>
                        <span>ფილიალი საქართველოში</span>
                    </Card>
                    <Card className="w-50 p-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/payments_black_24dp.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-2">2’800’843 ₾</span>
                        <span>ანაზღაურებული თანხა</span>
                    </Card>
                    <Card className="w-50 p-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/date_range_black_24dp.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-2">12</span>
                        <span>წარმატებული წელი</span>
                    </Card>
                    <hr className="w-50 m-auto my-4"/>
                </Row>

            </Container>
        </div>
    )
}