import React, {useState} from 'react';
import {Container} from "react-bootstrap";

const arr = [
    {
        imgUrl: "./img/careerPhotos/1.jpg",
        title: "გიორგი გიორგაძე",
        subTitle: "გენერალური დირექტორი",
        text: "2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი." +
            " ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს.აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი " +
            "გამოცდილება.2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში, სადაც მისი კარიერა " +
            "კორპორატიული კლიენტების მუშაობის 15 წლიანი გამოცდილება.2004 წლიდან მუშაობს."
    },
    {
        imgUrl: "./img/careerPhotos/2.jpg",
        title: "გიორგი გიორგაძე",
        subTitle: "გენერალური დირექტორი",
        text: "2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი." +
            " ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს.აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი " +
            "გამოცდილება.2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში, სადაც მისი კარიერა " +
            "კორპორატიული კლიენტების მუშაობის 15 წლიანი გამოცდილება.2004 წლიდან მუშაობს."
    },
    {
        imgUrl: "./img/careerPhotos/3.jpg",
        title: "გიორგი გიორგაძე",
        subTitle: "გენერალური დირექტორი",
        text: "2006 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი-საერთაშორისო სამართლის ფაკულტეტი." +
            " ფლობს საერთაშორისო სამართლის მაგისტრის ხარისხს.აქვს სადაზღვევო სექტორში მუშაობის 15 წლიანი " +
            "გამოცდილება.2004 წლიდან მუშაობს სადაზღვევო კომპანია ალდაგში, სადაც მისი კარიერა " +
            "კორპორატიული კლიენტების მუშაობის 15 წლიანი გამოცდილება.2004 წლიდან მუშაობს."
    }
]

function Member({imgUrl, title, subTitle, text, active, onClick}) {

    return (
        <div className={`${active ? "active" : ""} mx-2 d-flex`}>
            <img src={imgUrl} alt="pic" onClick={onClick}/>
            <div className="side-text w-50 d-none">
                <div className="p-3">
                    <h5 className="title">{title}</h5>
                    <h6 className="text-secondary">{subTitle}</h6>
                </div>
                <p className="description p-3 m-0">
                    {text}
                </p>
            </div>
        </div>
    )
}

function MgmtTeam(props) {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Container className="careerMgmtTeam d-none d-md-flex border border-2 bg-light">
            {/*this has to be fixed*/}
            {
                arr.map((member, index) => (
                    <Member {...member} key={index} active={index === activeIndex}
                            onClick={() => setActiveIndex(index)}></Member>
                ))
            }


        </Container>
    );
}

export default MgmtTeam;