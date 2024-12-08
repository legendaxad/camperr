import React from "react";
import { Container, Firstdiv, Ipadversion, Menucont, Phonedis, Salecont } from "./navbarstyle";
import salecor from "../assets/clarity_shopping-cart-solid.svg";

import { Link } from "react-router-dom";

import MenuSimple from "./login/profilr";

const Navbarcomponents = () => {
  return (
    <div>
      <Container>
        <Firstdiv>
          <Ipadversion><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M4.96875 7.46875H24.9687" stroke="#373737" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.96875 14.9688H24.9687" stroke="#373737" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.96875 22.4688H24.9687" stroke="#373737" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg></Ipadversion>
          <Link style={{ textDecoration: "none" }} to="/homepage">
           <h1>Camper</h1>
          </Link>
        </Firstdiv>
        <Menucont>
          <Link style={{ textDecoration: "none" }} to="/motor">
            <p>
              Motors
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M9.75 4.5L6.5 7.5L3.25 4.5"
                  stroke="#373737"
                  stroke-width="2"
                />
              </svg>
            </p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/caravan">
            <p>
              Caravan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M9.75 4.5L6.5 7.5L3.25 4.5"
                  stroke="#373737"
                  stroke-width="2"
                />
              </svg>
            </p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/tuning">
            {" "}
            <p>
              Tuning
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M9.75 4.5L6.5 7.5L3.25 4.5"
                  stroke="#373737"
                  stroke-width="2"
                />
              </svg>
            </p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/usedcar">
            
            <p>
              Used Car
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
              >
                <path
                  d="M9.75 4.5L6.5 7.5L3.25 4.5"
                  stroke="#373737"
                  stroke-width="2"
                />
              </svg>
            </p>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/camping">
            {" "}
            <p>Camping Place</p>
          </Link>
        </Menucont>
        <Phonedis>        <Link style={{ textDecoration: "none" }} to="/order">   <img src={salecor} alt="shopping-loge" /></Link>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M4.96875 7.46875H24.9687" stroke="#373737" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.96875 14.9688H24.9687" stroke="#373737" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.96875 22.4688H24.9687" stroke="#373737" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </Phonedis>
        <Salecont>
        <Link style={{ textDecoration: "none" }} to="/order">   <img src={salecor} alt="shopping-loge" /></Link>
          {/* <Link style={{ textDecoration: "none" }} to="/"> <MenuIntroduction/></Link> */}
          <MenuSimple/>
          <p>
            En
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
            >
              <path
                d="M9.75 4.5L6.5 7.5L3.25 4.5"
                stroke="#373737"
                stroke-width="2"
              />
            </svg>
          </p>
        </Salecont>
      </Container>
    </div>
  );
};

export default Navbarcomponents;
