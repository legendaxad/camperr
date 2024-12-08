import styled from "styled-components";

import imageback from "../../assets/bacroound.svg";
export const Backdiv = styled.div`
  background-image: url(${imageback});
  background-size: cover;

  height: 350px;
  background-repeat: no-repeat;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  
  


  h3 {
    color: whitesmoke;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h2 {
    color: white;
    font-family: Montserrat;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const Maindiv = styled.div`

  margin: 70px 80px;

 
`;
export const Topdiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  h2 {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  h3 {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 21px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;

  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;
export const Detaildiv = styled.div`
  width: 395px;
  
  flex-shrink: 0;
  
  h3{
    color: #000;
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-align: center;
  }
  `
  export const Imagedivv=styled.div`
  
  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 395px;
height: 198px;
flex-shrink: 0;
border-radius: 20px;

background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10); 
img{
  width: 289.452px;
height: 173.198px;
flex-shrink: 0;
border-radius: 5px;
}
  
`;
export const Accord=styled.div`
display: flex;
flex-direction:column;
padding: 20px;
`


