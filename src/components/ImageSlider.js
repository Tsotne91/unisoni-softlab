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

        <Carousel>
            <Carousel.Item style={{height:"32rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" className="position-relative opacity-50" style={{top: "9rem"}}/>
                    <p>შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            {/*<Carousel.Item style={{height:"32rem"}}>*/}
            {/*    <img*/}
            {/*        className="d-block w-100 h-100"*/}
            {/*        src="./slider/2.jpg"*/}
            {/*        alt="Second slide"*/}
            {/*    />*/}
            {/*</Carousel.Item>*/}
            <Carousel.Item style={{height:"32rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" className="position-relative opacity-50" style={{top: "9rem"}}/>
                    <p>შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"32rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/4.jpg"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" className="position-relative opacity-50" style={{top: "9rem"}}/>
                    <p className="text-dark">შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}