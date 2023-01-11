import {Carousel} from 'react-bootstrap';
import '../custom.scss';

export default function ImageSlider() {

    const sliders = [
        {src: "./slider/1.png"},
        {src: "./slider/2.jpg"},
        {src: "./slider/3.jpg"},
        {src: "./slider/4.jpg"},
        {src: "./slider/4.jpg"}
    ];

    return (
        <Carousel interval={50000} className="justify-content-center">
            {sliders.map((photo, index) => (
                <Carousel.Item key={index} className="carouselItem">
                    <img src={photo.src} alt="sliderPhoto" className="d-block w-100 h-100"/>
                    <Carousel.Caption>
                        <h1 className="my-4">ქონების დაზღვევა</h1>
                        <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                        <div className="py-2">შეიძინე ონლაინ</div>
                        <img src="./img/insuranceIcons/Path398.svg" alt="redImage"/>
                    </Carousel.Caption>
                    {/*below not working*/}
                    {/*<Carousel.Indicators className="custom-indicators-container">*/}
                    {/*    <li*/}
                    {/*        className='carousel-indicator custom-indicator'*/}
                    {/*        data-slide-to={index}*/}
                    {/*    />*/}
                    {/*</Carousel.Indicators>*/}
                </Carousel.Item>
            ))}
        </Carousel>
    )
}