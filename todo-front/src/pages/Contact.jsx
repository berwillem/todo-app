import "../styles/Contact.css";
import img from '../assets/images/contact2.gif';

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1>Get in Touch</h1>
          <div className="contact-info">
            <p>Wed love to hear from you! Feel free to reach out with any questions or inquiries.</p>
            <img src={img} alt="Contact Illustration" className="contact-img" />
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}
