import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";
import "./Styles/Main.scss";
import pics from "../assets/pics.jpeg";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <h1>Hi, I'm Racheal</h1>
            <p>I'm a Frontend Developer</p>
            <div className="icons">
                <Twitter className="icon"/>
                <Instagram className="icon"/>
                <LinkedIn className="icon"/>
                <Facebook className="icon"/>
            </div>
            <div className="button">
                <button>Download CV</button>
                <button>Hire Me</button>

            </div>
          </div>
        </div>
        <div className="main__image">
          <img src={pics} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Main;
