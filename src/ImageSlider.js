import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';


export default function ImageSlider(){
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    //
    // const sliders = [image1, image2, image3, image4, image5];


    return (

        <Carousel >
            <Carousel.Item style={{height:"20rem"}}>
                <img
                    className="d-block w-75 h-100"
                    src="./slider/1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{height:"20rem"}}>
                <img
                    className="d-block w-75 h-100"
                    src="./slider/2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item style={{height:"20rem"}}>
                <img
                    className="d-block w-75 h-100"
                    src="./slider/3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            {/*<Carousel.Item>*/}
            {/*    <img*/}
            {/*        className="d-block w-100 h-75"*/}
            {/*        src="../public/slider/4.jpg"*/}
            {/*        alt="Fourth slide"*/}
            {/*    />*/}

            {/*    <Carousel.Caption>*/}
            {/*        <h3>Fourth slide label</h3>*/}
            {/*        <p>*/}
            {/*            Praesent commodo cursus magna, vel scelerisque nisl consectetur.*/}
            {/*        </p>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    )
}