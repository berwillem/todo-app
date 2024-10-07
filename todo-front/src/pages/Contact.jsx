import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.css";
import img from "../assets/images/contact2.gif";
import Swal from 'sweetalert2'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4m7y7e4', 'template_y0zhb2t', form.current, '8mJVipUnofR2M_DeY')
      .then(
        () => {
          
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "SUCCESS",
  showConfirmButton: false,
  timer: 1000
});
        },
        (error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "error",
            showConfirmButton: false,
            timer: 1000
          });
        
        },
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <div className="contact-info">
            <p>We'd love to hear from you! Feel free to reach out with any questions or inquiries.</p>
            <img src={img} alt="Contact Illustration" className="contact-img" />
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

