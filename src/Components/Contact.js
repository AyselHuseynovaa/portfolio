import React from "react";
import location from "../logo/placeholder.svg";
import person from "../logo/man-user.svg";
import email from "../logo/envelope.svg";
import emailjs from "emailjs-com"
import linkedin from "../logo/linkedin (1).svg"
import github from "../logo/github (1).svg"
const Contact = () => {

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_nywhirk', 'template_kzv6ost', e.target, 'user_ZQvosnlMg0t0p7Igx3IHx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className="contact container">
      <div className="contact-title">
        <h1 className="title">Contact Me</h1>
      </div>

      <div className="contact-row row">

        <div className="contact-left-col col-md-6  col-sm-4">
          <div
            className="card shadow p-3 mb-5 bg-body rounded"
            style={{ width: " 30rem", border: "none" }}
          >
            <div className="contact-text">
              <h2 className="text">Get in touch</h2>
            </div>
            <div className="contact-list">
              <ul>
                <li>
                  <img src={person} />
                  <div className="card-body">
                    <span className="card-title">Name</span>
                    <br />
                    <span className="card-subtitle mb-2 text-muted">
                      Guseinova Aisel
                    </span>
                  </div>
                </li>
                <li>
                  <img src={location} />
                  <div className="card-body">
                    <span className="card-title">Address</span>
                    <br />
                    <span className="card-subtitle mb-2 text-muted">
                      Baku,Azerbaijan
                    </span>
                  </div>
                </li>
                <li>
                  <img src={email} />
                  <div className="card-body">
                    <span className="card-title">Email</span>
                    <br />
                    <span className="card-subtitle mb-2 text-muted">
                      ayselhuseynov3@gmail.com
                    </span>
                  </div>
                </li>
                <li>
                  <img src={linkedin} />
                  <div className="card-body">
                    <span className="card-title">Linkedin</span>
                    <br />
                    <span className="card-subtitle mb-2 text-muted">
                     <a  style={{textDecoration:"none"}} href="http://linkedin.com/in/aysel-guseinova-b820a21b0">Linkedin profile</a> 
                    </span>
                  </div>
                </li>
                <li>
                  <img src={github} />
                  <div className="card-body">
                    <span className="card-title">Github</span>
                    <br />
                    <span className="card-subtitle mb-2 text-muted">
                     <a  style={{textDecoration:"none"}} href="https://github.com/AyselHuseynovaa">Github profile</a> 
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
     
        <div className="contact-right-col col-md-5  col-sm-4 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="form-title">
          <h4>Message me</h4>
        </div>
        <form onSubmit={sendEmail} className="contact-form">
          <input className="form-field" type="text" placeholder="Name" required name="name"/>
          <input className="form-field" type="email" placeholder="Email" required name="email" />
          <input className="form-field"  type="text" placeholder="Subject" required name="subject"/>
          <textarea
          className="form-field" 
            rows="5"
            cols="30"
            placeholder="Message..."
            name="message"
          ></textarea>
          <button className="button">Send message</button>
        </form>
      </div>
      </div>
    </div>
  );
};
export default Contact;
