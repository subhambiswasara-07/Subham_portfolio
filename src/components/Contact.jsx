import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-div">
        <div className="contact-text">
          <div className="heading">
            <h1>
              Let's build <br />
              <span>Something Great</span>
            </h1>
          </div>
          <div className="paragraph">
            <p>
              Have a project in mind, a question, or just want to say hi I'd
              love to hear from you. Feel free to reach out - I'm always open
              for new opportunities, collaborations and interesting
              conversations.
            </p>
          </div>

          <div className="contact-icons">
            <a
              href="https://github.com/subhambiswasara-07"
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              <div className="cont-icon">
                <i className="fa-brands fa-github"></i>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/subham-biswasray-66b30b367"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <div className="cont-icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            <a
              href="https://www.instagram.com/__subhh___07?stkn=MThqNjFmY3RwYXB1bQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="insta"
            >
              <div className="cont-icon">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>

            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp"
            >
              <div className="cont-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-heading">
            <h2>
              Send Me a <span>Message</span>
            </h2>

            <p>
              Fill out the form below and I’ll get back to you as soon as
              possible.
            </p>
          </div>

          <form>
            {/* Name + Email */}
            <div className="form-row">
              <div className="form-group">
                <label>
                  Name <span>*</span>
                </label>

                <input type="text" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label>
                  Email <span>*</span>
                </label>

                <input type="email" placeholder="you@example.com" required />
              </div>
            </div>

            {/* Subject */}
            <div className="form-group">
              <label>
                Subject <span>*</span>
              </label>

              <input type="text" placeholder="Enter subject" required />
            </div>

            {/* Message */}
            <div className="form-group">
              <label>
                Message <span>*</span>
              </label>

              <textarea
                placeholder="Your message..."
                rows="4"
                required
              ></textarea>
            </div>

            {/* Button */}
            <button type="submit" className="send-btn">
              Send Message
              <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
