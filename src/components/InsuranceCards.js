import React from 'react';
import {Card, Container, Row} from "react-bootstrap";
import house from "./icons/house.svg";
import health from "./icons/health_and_safety_black_48dp.svg";
import car from "./icons/directions_car_filled_black_48dp.svg";
import responsibility from "./icons/how_to_reg_black_24dp.svg";
import flight from "./icons/flight_takeoff_black_48dp.svg";
import basket from "./icons/Path 218.svg"

export default function InsuranceCards() {
    const cardStyle = {
        width: "12rem",
        height: "10rem",
        fontSize: "1rem",
        textAlign: "center",
        alignItems: "center",
        marginRight: "0.8rem",
        marginBottom: "1rem",
        paddingTop: "0.7rem",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "5px 10px 8px #e1e1ea",
        bottom: "2rem",
        fontFamily: "ExtraSquare",
    }

    const iconStyle = {
        width: "2.5rem",
        paddingBottom: "0.4rem"
    }

    return (
        <Container className="d-flex justify-content-center"> {/* this needs to be adjusted for mobile*/}
            <Row>
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
                {/*<Button variant="danger" className="w-100">SOS</Button>*/}
            </Row>

        </Container>
    )
}