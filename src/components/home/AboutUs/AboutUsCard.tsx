import React from "react";

interface AboutUsCardProps {
    img: string;
    title: string;
    desc: string;
    reverse?: boolean;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ img, title, desc, reverse = false }) => {
    return (
        <div className={`d-flex flex-column flex-md-row align-items-center justify-content-center text-white p-4 ${reverse ? 'flex-md-row-reverse' : ''}`}>
            <div className="col-12 col-md-4 d-flex justify-content-center">
                <img src={img} alt={title} className="img-fluid rounded" />
            </div>
            <div className={`col-12 col-md-6 text-center text-md-start mt-3 mt-md-0 ${reverse ? 'me-md-5' : 'ms-md-5'}`}>
                <h2 className="h5 fw-bold">{title}</h2>
                <p className="small mt-2">{desc}</p>
            </div>
        </div>
    );
};

export default AboutUsCard;
