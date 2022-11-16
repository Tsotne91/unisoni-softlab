import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import house from "./icons/insuranceIcons/house.svg";
import health from "./icons/insuranceIcons/health_and_safety_black_48dp.svg";
import car from "./icons/insuranceIcons/directions_car_filled_black_48dp.svg";
import responsibility from "./icons/how_to_reg_black_24dp.svg";
import flight from "./icons/insuranceIcons/flight_takeoff_black_48dp.svg";
import basket from "./icons/insuranceIcons/Path 218.svg";
import Button from "react-bootstrap/Button";

export default function InsuranceCards() {
    const cardStyle = {
        width: "12rem",
        height: "10rem",
        fontSize: "1rem",
        textAlign: "center",
        alignItems: "center",
        marginRight: "0.8rem",
        marginTop: "1rem",
        paddingTop: "1.5rem",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "5px 10px 8px #e1e1ea",
        bottom: "2rem",
        fontFamily: "ExtraSquare"
    }

    const iconStyle = {
        width: "2.5rem",
        paddingBottom: "0.4rem"
    }

    const advantagesStyle = {
        width: "10rem",
        margin: "1rem",
        padding: "0.7rem",
        fontSize: "0.8rem",
        fontFamily: "BPGArial",
        textAlign: "center",
        border: "none"
    }

    return (
        <>
            <Container className="d-flex justify-content-center">
                <Row className="justify-content-center">
                    <Card style={cardStyle}>
                        <img src={house} style={iconStyle}/>
                        <span>ქონების<br/>
                     დაზღვევა</span>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={health} style={iconStyle}/>
                        <span>ჯანმრთელობის<br/>
                     დაზღვევა</span>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={car} style={iconStyle}/>
                        <span>ავტომობილის<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={responsibility} style={iconStyle}/>
                        <span>პასუხისმგებლობის<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle}>
                        <img src={flight} style={iconStyle}/>
                        <span>სამოგზაურო<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle} className="d-flex d-md-none">
                        <img src={basket} style={iconStyle}/>
                        <span>შეიძინე<br/>
                    ონლაინ
                </span>
                    </Card>
                    <Button variant="danger"
                            className="w-75 my-3 py-2 fs-3 d-md-none d-flex text-light justify-content-center">SOS</Button>
                </Row>
            </Container>
            <Container className="d-none d-md-flex">
                <Col className="d-md-inline-block border border-0">

                    <h2 style={{fontFamily: "ExtraSquare", textAlign: "center", marginTop: "3rem"}}>უპირატესობები</h2>
                    <Row className="d-flex justify-content-center">
                        <Card style={advantagesStyle}>
                            <img src="./img/advantagesIcons/consumer.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>მომხმარებლის კმაყოფილების 96%-იანი დონე</span>
                        </Card>
                        <Card style={advantagesStyle}>
                            <img src="./img/advantagesIcons/stars.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>მაღალრეიტინგული გადამზღვევი კომპანიები</span>
                        </Card>
                        <Card style={advantagesStyle}>
                            <img src="./img/advantagesIcons/touch_app_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>თანამედროვე ელექტრონული სერვისები</span>
                        </Card>
                        <Card style={advantagesStyle}>
                            <img src="./img/advantagesIcons/timer_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>ზარალის დარეგულირების უმოკლესი ვადები</span>
                        </Card>
                        <Card style={advantagesStyle}>
                            <img src="./img/advantagesIcons/people_outline_black_24dp.svg"
                                 style={{width: "2rem", marginLeft: "2.5rem"}}/><br/>
                            <span>კორპორატიული კლიენტების ფართო სპექტრი</span>
                        </Card>
                        <Card style={advantagesStyle}>
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
                    <Card className="w-50 py-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/consumer.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-3">32067</span>
                        <span>კმაყოფილი მომხმარებელი</span>
                    </Card>
                    <Card className="w-50 py-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/business_black_24dp.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-3">5</span>
                        <span>ფილიალი საქართველოში</span>
                    </Card>
                    <Card className="w-50 py-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/payments_black_24dp.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-3">2’800’843 ₾</span>
                        <span>ანაზღაურებული თანხა</span>
                    </Card>
                    <Card className="w-50 py-2 align-items-center border-0">
                        <img src="./img/advantagesIcons/date_range_black_24dp.svg"
                             style={{width: "4rem"}}/>
                        <span className="text-primary fw-bold fs-3">12</span>
                        <span>წარმატებული წელი</span>
                    </Card>
                </Row>

            </Container>
        </>
    )
}