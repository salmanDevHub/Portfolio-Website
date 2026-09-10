import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:salmanch1289@gmail.com" data-cursor="disable">
                salmanch1289@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+92337651606" data-cursor="disable">
                +92 337 651 606
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/salmanDevHub"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/salmanshahid11"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Based in <br /> <span>Vehari, Punjab, Pakistan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Salman Shahid
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
