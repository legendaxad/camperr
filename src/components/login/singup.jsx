import React from 'react'
import Checkbox from "@mui/material/Checkbox";

import {
  
  Linediv,
  Login,
  Logindiv,
  MainLog,
  Regisdiv,
  
} from "./loginstyle";

import { Label } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Singupcomponent = () => {
  return (
      <div>
      <MainLog>
        <Login>
          
          <Regisdiv><h2>Registrate</h2>
          <Link style={{ textDecoration: "none" }} to="/">    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72246 4.72254C4.92874 4.51632 5.20848 4.40047 5.50016 4.40047C5.79184 4.40047 6.07157 4.51632 6.27786 4.72254L11.0002 9.44484L15.7225 4.72254C15.8239 4.61747 15.9453 4.53367 16.0795 4.47602C16.2137 4.41837 16.3581 4.38803 16.5041 4.38676C16.6502 4.38549 16.795 4.41332 16.9302 4.46863C17.0654 4.52394 17.1882 4.60562 17.2915 4.7089C17.3948 4.81218 17.4765 4.935 17.5318 5.07019C17.5871 5.20537 17.6149 5.35022 17.6136 5.49628C17.6124 5.64233 17.582 5.78668 17.5244 5.92088C17.4667 6.05508 17.3829 6.17646 17.2779 6.27794L12.5556 11.0002L17.2779 15.7225C17.4782 15.93 17.5891 16.2079 17.5866 16.4963C17.5841 16.7847 17.4684 17.0606 17.2645 17.2645C17.0605 17.4685 16.7846 17.5842 16.4962 17.5867C16.2078 17.5892 15.9299 17.4783 15.7225 17.2779L11.0002 12.5556L6.27786 17.2779C6.07039 17.4783 5.79253 17.5892 5.50411 17.5867C5.2157 17.5842 4.9398 17.4685 4.73586 17.2645C4.53191 17.0606 4.41622 16.7847 4.41371 16.4963C4.41121 16.2079 4.52208 15.93 4.72246 15.7225L9.44476 11.0002L4.72246 6.27794C4.51624 6.07165 4.40039 5.79192 4.40039 5.50024C4.40039 5.20856 4.51624 4.92882 4.72246 4.72254Z" fill="#373737"/>
</svg></Link></Regisdiv>
          <Logindiv>
            <p>Email</p><br />
            <input type="text" placeholder="Your email" />
          </Logindiv>
          <Logindiv>
            <p>Password</p><br />
            <input type="password" placeholder="Your password" />
          </Logindiv>
          <Logindiv>
            <p>Repeat your password</p><br />
            <input type="password" placeholder="Your password" />
          </Logindiv>
          <Linediv>
            <p>
              {" "}
              <Checkbox {...Label} />
              Keep me logged in
            </p>
            
          </Linediv>
          <button>REGISTRATE</button>
         
          
         
        </Login>
      </MainLog>
    </div>
  )
}

export default Singupcomponent