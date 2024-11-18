import React from "react";
import { Campingcenter, Location, Maincamp, Places } from "./campingstyle";
import Locat1 from "../assets/camppla1.svg";
import Locat2 from "../assets/campple2.svg";
import Locat3 from "../assets/camppl3.svg";
import Locat4 from "../assets/camping-places-4.jpg";
import Locat5 from "../assets/camping-places-5.webp";
import Locat6 from "../assets/camping-places-6.webp";
import Locat7 from "../assets/camping-places-7.jpg";
import Locat8 from "../assets/camping-places-8.webp";
import Locat9 from "../assets/camping-places-9.jpg";
import Locat10 from "../assets/camping-places-10.jpeg";
import Locat11 from "../assets/camping-places-11.jpg";
import Locat12 from "../assets/camping-places-12.jpg";
const Campingcomponent = () => {
  return (
    <div>
      <Maincamp>
        <p>Home / Camping place</p>
        <h2>Camping places</h2>
      </Maincamp>
      <Campingcenter>
        <Places>
          <Location>
            <img src={Locat1} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat2} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat3} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat4} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat5} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat6} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat7} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat8} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat9} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat10} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat11} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
          <Location>
            <img src={Locat12} alt="Places" />
            <h2>Camping place name</h2>
            <p>Location</p>
          </Location>
        </Places>
      </Campingcenter>
    </div>
  );
};

export default Campingcomponent;
