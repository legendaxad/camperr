import React from "react";
import { Campingcenter, Location, Maincamp, Places } from "./campingstyle";

import campingPlaces from "./campingData";
import { Link } from "react-router-dom";
const Campingcomponent = () => {
  
  
  return (
    <div>
      <Maincamp>
        <p>Home / Camping place</p>
        <h2>Camping places</h2>
      </Maincamp>
      <Campingcenter>
       { campingPlaces.map((value , Hmenu)=>{ 
        return (
          
          <Link style={{textDecoration:'none'}} to={`/camping-place/${value.id}`}><Places>
          <Location key={value.id}>
            <img src={value.camping.photo} alt="Places" />
            <h2>{value.camping.name}</h2>
            <p>{value.camping.location}</p>
          </Location>
          
         
        </Places></Link>
       
      )})}
      </Campingcenter>
    </div>
  );
};

export default Campingcomponent;
