import React from "react";
import Checkbox from "@mui/material/Checkbox";

import {
  Buutoon,
  DivOr,
  Linediv,
  Login,
  Logindiv,
  MainLog,
  Socialmeadia,
} from "./loginstyle";
import Naver from "../../assets/623afb9327d4946aceae2faf.png";
import Google from "../../assets/google-plus.png";
import Kakaotalk from "../../assets/kakao-talk.png";
import { Link } from "react-router-dom";

const Logincomponent = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <MainLog>
        <Login>
          <h2>Sign in</h2>
          <Logindiv>
            <p>Email</p>
            <input type="text" placeholder="Your email" />
          </Logindiv>
          <Logindiv>
            <p>Email</p>
            <input type="text" placeholder="Your password" />
          </Logindiv>
          <Linediv>
            <p>
              {" "}
              <Checkbox {...label} />
              Keep me logged in
            </p>
            <p>Forget your password ?</p>
          </Linediv>
          <Link style={{ textDecoration: "none" }} to="/homepage"><button>SIGN IN</button></Link> 
          <DivOr>
            <div></div>
            <p>OR</p>
            <div></div>
          </DivOr>
          <Socialmeadia>
            <img src={Naver} alt="" />
            <img src={Google} alt="" />
            <img src={Kakaotalk} alt="" />
          </Socialmeadia>
          <Link style={{ textDecoration: "none" }} to="/sing-up">  <Buutoon>CREATE ACCOUNT</Buutoon></Link>
        </Login>
      </MainLog>
    </div>
  );
};

export default Logincomponent;
