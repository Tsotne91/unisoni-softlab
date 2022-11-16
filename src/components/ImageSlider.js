import Carousel from 'react-bootstrap/Carousel';
import '../custom.scss';


export default function ImageSlider(){
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    //
    // const sliders = [image1, image2, image3, image4, image5];

    const imgStyle = {
        width: "22rem",
        position: "relative",
        top: "7rem",
        zIndex: "10"
    }

    const textStyle = {
        zIndex: "12",
        position: "relative",
        top: "0.5rem"
    }

    const captionStyle = {
        fontFamily: "ExtraSquare",
        position: "relative",
        top: "7rem"
    }


    return (

        <Carousel interval={50000} className="justify-content-center">
            <Carousel.Item style={{height:"25rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/shutterstock_627788162@2x.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4" style={captionStyle}>ქონების დაზღვევა</h1>
                    <h5 className="my-4" style={{position: "relative", top: "7rem"}}>ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" style={imgStyle}/>
                    <p style={textStyle}>შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"25rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4" style={captionStyle}>ქონების დაზღვევა</h1>
                    <h5 className="my-4" style={{position: "relative", top: "7rem"}}>ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" style={imgStyle}/>
                    <p style={textStyle}>შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"25rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4" style={captionStyle}>ქონების დაზღვევა</h1>
                    <h5 className="my-4" style={{position: "relative", top: "7rem"}}>ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" style={imgStyle}/>
                    <p style={textStyle}>შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{height:"25rem"}}>
                <img
                    className="d-block w-100 h-100"
                    src="./slider/4.jpg"
                    alt="Fourth slide"
                />
                <Carousel.Caption>
                    <h1 className="my-4" style={captionStyle}>ქონების დაზღვევა</h1>
                    <h5 className="my-4" style={{position: "relative", top: "7rem"}}>ყველაზე ხელსაყრელი პირობებით</h5>
                    <img src="./img/Image42.png" style={imgStyle}/>
                    <p style={textStyle}>შეიძინე ონლაინ</p>
                    <img src="./img/Path398.svg"/>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}