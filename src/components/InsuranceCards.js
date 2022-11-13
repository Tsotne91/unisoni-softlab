import React from 'react';
import {Card, Container, Row} from "react-bootstrap";
import {MdOutlineHouse} from 'react-icons/md';
import {RiShieldCrossLine} from "react-icons/ri";
import {BiCar} from 'react-icons/bi';
import {BsPersonCheck} from 'react-icons/bs';
import {GiAirplaneDeparture} from 'react-icons/gi';

export default function InsuranceCards() {
    const cardStyle = {
        width: "12rem",
        height: "10rem",
        marginRight: "2rem",
        padding: "2rem"
    }

    const iconStyle = {
        fontSize: "2rem",
    }

    return (
        <Container className="d-flex justify-content-center">
            <Row>
                    <Card style={cardStyle}>
                        <MdOutlineHouse style={iconStyle}/>
                        <span>ქონების
                     დაზღვევა</span>
                    </Card>
                    <Card style={cardStyle}>
                        <RiShieldCrossLine/>
                        <span>ჯანმრთელობის<br/>
                დაზღვევა</span>
                    </Card>
                    <Card style={cardStyle}>
                        <BiCar style={iconStyle}/>
                        <span>ავტომობილის<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle}>
                        <BsPersonCheck style={iconStyle}/>
                        <span>პასუხისმგებლობის<br/>
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle}>
                        <GiAirplaneDeparture style={iconStyle}/>
                        <span>პასუხისმგებლობის<br/>
                    დაზღვევა
                </span>
                    </Card>

            </Row>
        </Container>
    )
}