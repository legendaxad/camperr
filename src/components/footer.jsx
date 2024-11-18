import React from "react";
import { Contact, Footerback, Menu, Services, Social } from "./footerstyle";
import Youtube from "../assets/cib_youtube.svg";
import Insta from "../assets/insta.svg";
import Naver from "../assets/simple-icons_naver.svg";

const Footercomponents = () => {
  return (
    <div>
      <Footerback>
        <h1>Camper</h1>
        <Services>
          <h2>Services</h2>
          <p>Camping</p>
          <p>Lodging</p>
          <p>Harbor</p>
          <p>Day Use</p>
        </Services>
        <Menu>
          <h2>Menu</h2>
          <p>About</p>
          <p>Services</p>
          <p>Booking</p>
          <p>Blog</p>
        </Menu>
        <Contact>
          <h2>Contact</h2>
          <Social>
            <img src={Youtube} alt="" />
            <img src={Insta} alt="" />
            <img src={Naver} alt="" />
          </Social>
          <p>021 Korea Seul, LA</p>
          <p>camper@example.com</p>
          <p>(021) 345-6789-99</p>
        </Contact>
      </Footerback>
    </div>
  );
};

export default Footercomponents;
