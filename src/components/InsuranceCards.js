import React from 'react';
import {Card, Container} from "react-bootstrap";
import {MdOutlineHouse} from 'react-icons/md';
import {RiShieldCrossLine} from "react-icons/ri";
import {BiCar} from 'react-icons/bi';
import {BsPersonCheck} from 'react-icons/bs';
import {GiAirplaneDeparture} from 'react-icons/gi';

export default function InsuranceCards() {
    const cardStyle = {width: "9rem"}

    return (
        <Container className='d-grid'>

                    <Card style={cardStyle}>
                        <MdOutlineHouse/>
                        <span>ქონების
                     დაზღვევა</span>
                    </Card>
                    <Card style={cardStyle}>
                        <RiShieldCrossLine/>
                        <span>ჯანმრთელობის
                დაზღვევა</span>
                    </Card>
                    <Card style={cardStyle}>
                        <BiCar/>
                        <span>ავტომობილის
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle}>
                        <BsPersonCheck/>
                        <span>პასუხისმგებლობის
                    დაზღვევა
                </span>
                    </Card>
                    <Card style={cardStyle}>
                        <GiAirplaneDeparture/>
                        <span>პასუხისმგებლობის
                    დაზღვევა
                </span>
                    </Card>
        </Container>
    )
}