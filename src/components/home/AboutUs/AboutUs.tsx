import AboutUsCard from "./AboutUsCard";
import {useTranslations, useLocale} from 'next-intl';


const AboutUs = () => {
    const ab = useTranslations('AboutUs')


    const cardsData = [
        {
            img: "https://img.freepik.com/free-photo/smiling-asian-woman-with-notebooks-student-with-happy-face-promo-college-education-blue-backgroun_1258-167224.jpg?t=st=1740923664~exp=1740927264~hmac=08751c33ed5fc6b06b53e91efa07bb7a5fd51ca98288c4bb4565cd09553b2a7a&w=996",
            title: ab('title1'),
            desc: ab('descCard1'),
        },
        {
            img: "https://img.freepik.com/free-photo/surprised-beautiful-woman-sits-table-with-makeup-tools-holding-idea-bubble-with-makeup-brush_141793-122825.jpg?t=st=1740923604~exp=1740927204~hmac=7717217e21666f996e6ffef6377cb21f231e02f34a9804f40064409938fbf036&w=996",
            title: ab('title2'),
            desc: ab('descCard2'),
        },
        {
            img: "https://img.freepik.com/free-photo/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office_7861-2743.jpg?t=st=1740923707~exp=1740927307~hmac=959dfc6a7f6ca6bf7c7c1567389b36569eded366ea7fded50fbd679222a4c05c&w=996",
            title: ab('title3'),
            desc: ab('descCard3'),
        },
    ];
    return (
        <div 
        style={{ backgroundColor: "#0173B1" }}
        className=" text-white py-5 px-3">
            <div className="container text-center">
                <h1 className="display-5 fw-bold">{ab('title')}</h1>
                <p className="mt-3 fs-5">
                    {ab('desc3')}
                </p>
            </div>
            <div 
            style={{ marginTop: "84px"}}
            className="container">
                <div className="row g-4">
                    {cardsData.map((data, index) => (
                        <div key={index} className="">
                            <AboutUsCard 
                                img={data.img}
                                title={data.title}
                                desc={data.desc}
                                reverse={index % 2 !== 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;