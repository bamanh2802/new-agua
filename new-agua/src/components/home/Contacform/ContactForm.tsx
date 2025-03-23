import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Phần Contact Us */}
        <div className="col-md-5" data-aos="fade-right">
          <h2 className="fw-bold fs-2 mb-4">Contact Us</h2>
          <p className="fs-4 d-flex align-items-center">
            <i className="bi bi-geo-alt text-primary display-8 me-3"></i> Viet Nam
          </p>
          <p className="fs-4 d-flex align-items-center">
            <i className="bi bi-envelope text-primary display-8 me-3"></i> contact@aguaedu.com
          </p>
          <p className="fs-4 d-flex align-items-center">
            <i className="bi bi-globe text-primary display-8 me-3"></i> aguaedu.com
          </p>
        </div>

        {/* Phần Form */}
        <div className="col-md-7" data-aos="fade-left">
          <h2 className="fw-bold">Send Message For Agua</h2>
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="E-mail" />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Mobile Number" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows={3} placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
