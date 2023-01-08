import Carousel from 'react-bootstrap/Carousel';
import '../custom.scss';


export default function ImageSlider(){
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    //
    // const sliders = [image1, image2, image3, image4, image5];


    return (

        <Carousel interval={50000} className="justify-content-center">
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100 h-100"
                    src="./slider/shutterstock_627788162@2x.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <div className="p-2" style={{background: 'url(./img/Image42.png) top center no-repeat'}}>შეიძინე ონლაინ</div>
                    <img src="./img/insuranceIcons/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100 h-100"
                    src="./slider/2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" className="redImage"/>
                    <p>შეიძინე ონლაინ</p>
                    <img src="./img/insuranceIcons/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100 h-100"
                    src="./slider/3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" className="redImage"/>
                    <p>შეიძინე ონლაინ</p>
                    <img src="./img/insuranceIcons/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <img
                    className="d-block w-100 h-100"
                    src="./slider/4.jpg"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4">ქონების დაზღვევა</h1>
                    <h5 className="my-4">ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" className="redImage"/>
                    <p>შეიძინე ონლაინ</p>
                    <img src="./img/insuranceIcons/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}