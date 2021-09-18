import React, { useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

const ResultEmail = () => {
  return <p>your email has been sent successfully</p>;
};

function Contact() {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bysxc6i",
        "template_fcqrraw",
        e.target,
        "user_hpNeP1xEldbEgBAZ9hq5j"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="line">
        <h1>Contact</h1>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="left">
          <h1>Hiring Me</h1>
        </div>
        <div className="left">
          <form className="form" onSubmit={sendEmail}>
            <div className="out-message">{result ? <ResultEmail /> : null}</div>
            <h2>CONTACT ME</h2>
            <p type="Name:">
              <input name="name" placeholder="Type Name.." required></input>
            </p>
            <p type="Email:">
              <input
                type="email"
                name="email"
                placeholder="Type Email.."
                required
              ></input>
            </p>
            <p type="Message:">
              <input
                name="message"
                placeholder="Type Message.."
                required
              ></input>
            </p>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
