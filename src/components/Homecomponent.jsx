import React from "react";
import {
  Blogdiv,
  CamperBlog,
  Campervideo,
  Imagesofcaravan,
  Ptag,
} from "./homestyle";
import examPle from "../assets/carousel-img2 copy.webp";
import { Carousel } from "./homecompont/home";

import Blogimg1 from "../assets/blog1.svg";
import Blogimg2 from "../assets/blog2.svg";
import Blogimg3 from "../assets/blog3.svg";
import Blogimg4 from "../assets/blog4.svg";
import Blogimg5 from "../assets/blog5.svg";
import Blogimg6 from "../assets/blog6.svg";
import Caravahead2 from "../assets/carousel-img.png";
import Caravahead3 from "../assets/carousel-img2.webp";

import Modalcomponet from "./homecompont/modal";
import Caruselllll from "./homecompont/caruselllll";
import { Recomen } from "./homecompont/caruselstyle";

export const Homecomponent = () => {
  return (
    <div>
      <Carousel autoPlay>
        <div>
          <Imagesofcaravan src={examPle} alt="" />
        </div>
        <div>
          <Imagesofcaravan src={Caravahead2} alt="" />
        </div>
        <div>
          <Imagesofcaravan src={Caravahead3} alt="" />
        </div>
      </Carousel>
      <Recomen>
        <h2>Recommend</h2>

        <div>
          <Caruselllll />
        </div>
      </Recomen>

      <Modalcomponet />
      <Ptag>Blogs</Ptag>
      <Blogdiv>
        <CamperBlog>
          <h2>Camper</h2>
          <br />
          <h4>@camper_1</h4>
          <br />
          <div>
            <p>
              Camping truly is for everyone, from your oldest family member to
              little campers just trekking out for the first time. Whether your
              plan is to relax, explore or reconnect, CAMPER campgrounds are a
              great place to create memories with those you love.
            </p>
          </div>
        </CamperBlog>
        <Campervideo>
          <img src={Blogimg1} alt="" />
          <img src={Blogimg2} alt="" />
          <img src={Blogimg3} alt="" />
          <img src={Blogimg4} alt="" />
          <img src={Blogimg5} alt="" />
          <img src={Blogimg6} alt="" />
        </Campervideo>
      </Blogdiv>
    </div>
  );
};
