
import React from "react";
import "./reason.css"; // Import CSS


import {useTranslations, useLocale} from 'next-intl';

const imageList: string[] = ["/assets/portrait-smiling-young-woman-standing-with-laptop-against-gray-wall.jpg", 
  "/assets/young-traveller-enjoying-holidays.jpg", 
  "/assets/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg", 
  "/assets/portrait-smiling-asian-student.jpg"
];

interface ServiceCardProps {
  imgSrc: string;
  title: string;
  description: string;
}

// Component hiển thị một thẻ dịch vụ
const ServiceCard: React.FC<ServiceCardProps> = ({ imgSrc, title, description }) => (
  <div className="col-10 col-md-4" data-aos="fade-up" data-aos-duration="1200">
    <div className="service-card">
      <div className="img">
        <img src={imgSrc} className="w-25 img-fluid" alt={title} />
      </div>
      <div className="content mt-3">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
);


const ServiceAndSkill: React.FC = () => {
  const t = useTranslations('HomePage');
  const ab = useTranslations('AboutUs')
  const g = useTranslations('Global')
  const serviceData: ServiceCardProps[] = [
    { imgSrc: "/assets/695d0c035556e408bd472.jpg", title: t('service1'), description: t('desService1') },
    { imgSrc: "/assets/c1c6f794aec11f9f46d03.jpg", title: t('service2'), description: t('desService2') },
    { imgSrc: "/assets/cd76452e1c7bad25f46a1.jpg", title: t('service3'), description: t('desService3') },
  ];
  const locale = useLocale(); // Lấy ngôn ngữ hiện tại
  return (
    <>
      <section className="expertise pt-5 pb-5" id="service">
        <div className="row justify-content-evenly px-5">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="skill py-5" id="about">
        <div className="row justify-content-evenly">
          <div
            className="col-10 col-md-5 skill-with-progress"
            data-aos="slide-right"
            data-aos-duration="1000"
          >
            <div className="row justify-content-evenly">
              {imageList.map((imageSrc, index) => (
                <div key={index} className="col-10 col-md-6 mt-4">
                  <div className="progress-card ms-3 ms-md-0">
                    <img src={imageSrc} alt={`Progress Image ${index + 1}`} className="progress-image" />
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-10 col-md-5 skill-detail"
            data-aos="slide-left"
            data-aos-duration="1200"
          >
            <div className="heading mt-5 mt-md-3">
              <h3>{ab('title')}</h3>
              <p className="text-white">
                {ab('desc1')}
              </p>
              <p className="text-white">
                {ab('desc2')}
              </p>
              <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                <a href={`/${locale}/aboutus`}>{g('readMore')}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAndSkill;
