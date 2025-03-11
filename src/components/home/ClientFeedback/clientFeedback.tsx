import React from "react";
import "./clientFeedback.css";
import testimonialImg from "/assets/tastimonials-img.png"; 
import {useTranslations} from 'next-intl';


const ClientFeedback = () => {
  const fb = useTranslations('Testimonials')
  const testimonials = [
    {
      name: fb('name1'),
      role: fb('role1'),
      feedback: fb('feedback1'),
    },
    {
      name: fb('name2'),
      role: fb('role2'),
      feedback: fb('feedback2'),
    },
    {
      name: fb('name3'),
      role: fb('role3'),
      feedback: fb('feedback3'),
    },
  ];




  return (
    <section className="testimonial mt-5 pt-5" id="testimonial">
      <div className="row justify-content-evenly">
        <div className="col-md-4 col-10" data-aos="slide-right">
          <img src="/assets/tastimonials-img.png" className="img-fluid" alt="Testimonial" />
        </div>

        <div className="col-md-6 col-10 mt-5" data-aos="slide-left">
          <div className="heading">
            <h3>{fb('title')}</h3>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center">
                        <i className="bi bi-quote" style={{ fontSize: "2rem" }}></i>
                      </div>
                      <div className="col-10">
                        <p className="text-muted">{testimonial.feedback}</p>
                        <h4>{testimonial.name}</h4>
                        <small className="fs-6 text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="nextprev-btn rounded-pill prev-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i className="bi bi-arrow-left-circle-fill prev" style={{ fontSize: "1.5rem" }}></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="nextprev-btn rounded-pill next-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i className="bi bi-arrow-right-circle-fill next" style={{ fontSize: "1.5rem" }}></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
