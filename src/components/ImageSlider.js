import Carousel from 'react-bootstrap/Carousel';
import '../custom.scss';


export default function ImageSlider(){
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    //
    const sliders = [
        {  src: "./slider/shutterstock_627788162@2x.png", },
        { src: "./slider/2.jpg"},
        { src: "./slider/3.jpg"},
        { src: "./slider/4.jpg"},
        { src: "./slider/4.jpg"}
    ];


    return (

        <Carousel interval={50000} className="justify-content-center">

                { sliders.map((photo, index) => (
                        <Carousel.Item key={index} className="carouselItem">
                            <img src={photo.src} alt="sliderPhoto" className="d-block w-100 h-100"/>
                            <Carousel.Caption>
                                <h1 className="my-4">ქონების დაზღვევა</h1>
                                <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                                <div className="p-2">შეიძინე ონლაინ</div>
                                <img src="./img/insuranceIcons/Path398.svg" alt="redImage"/>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
        </Carousel>
    )
}