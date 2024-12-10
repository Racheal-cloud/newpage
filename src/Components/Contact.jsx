import React from "react";
import "./Styles/Contact.scss";
import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
        <Link to="/contact">Contact
        <ArrowBack className="arrow"/>
        </Link>
      <div className="contact__container">
        <h1>Contact Us</h1>
        <p>
          Feel free to contact us any time. We will get back to you as soon as
          we can!
        </p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
