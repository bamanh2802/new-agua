'use client'

import {useTranslations} from 'next-intl';
import React, { useState } from "react";
import "./contact.css"; // Import file CSS nếu có
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const c = useTranslations('Contact')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Message Sent Successfully!");
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="heading text-center">
        <h3>{c('title')}</h3>
      </div>

      <div className="row justify-content-evenly mt-5">
        {/* Contact Details */}
        <div className="col-md-5 col-10 contact-details" data-aos="slide-right">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p>Viet Nam</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>contact@aguaedu.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
            <p>@aguaedu.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-5 col-10 mt-3 mt-md-0" data-aos="slide-left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" className="form-control mb-3" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" className="form-control mb-3" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phone" className="form-control mb-3" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
            <textarea name="message" className="form-control mb-3" placeholder="Message" rows={5} value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit" className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
