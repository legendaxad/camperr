import React from 'react'
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Notfound = () => {
      const navigate = useNavigate();
  return (
    <div>
      <Notfoun>
      <h1>OPPS PAGE IS NOT FOUND</h1>
<h3>404</h3>
      
      <h2>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h2>
      <br /><br />

      <Button onClick={() => navigate(-1)} style={{backgroundColor:'red'}} variant="contained">press to go back</Button>
      </Notfoun>
      
    </div>
    
  )
};
const Notfoun=styled.div`
margin:100px 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
      font-size: 40px;
      color: red;
      font-family: Georgia, 'Times New Roman', Times, serif;
}
      h3{
            font-size: 250px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: 700;
      }
      h2{
            font-size: 26px;
            font-family: monospace;
            text-align: center;
            color:rebeccapurple;      }
`
export default Notfound