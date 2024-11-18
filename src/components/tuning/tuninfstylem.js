import styled from "styled-components";
export const Hmenuca = styled.div`
  display: grid;
  grid-template-areas: "a a a a";

  gap: 20px;

  padding-top: 20px;
`;

export const Vmenucar = styled.div`
  display: flex;

  
  width: 100%;
  flex-direction: column;
  gap: 20px;
  padding-top: 35px;
  justify-content: space-around !important;
  align-items: center;
`;
export const Maincar=styled.div`
width: 100%;
display: flex;
align-items: start;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);

img{
  padding: 18px;
  width: 250px;
height: 143.853px;
flex-shrink: 0;
background-color: white;
border-radius: 10%;
}
`
export const Carinsideinfo=styled.div`
padding: 30px 40px 26px 15px;

display: flex;
flex-direction:column;
justify-content: space-between;
width: 100%;
`
export const Insidecar=styled.div`
padding-bottom: 45px;
display: flex;

justify-content: space-between;
width: 100%;
div{
  display: flex;
flex-direction:column;
justify-content: space-between;
width: 100%;
h3{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p{
  color: var(--text, #373737);
font-family: Montserrat;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
align-items: center;
justify-content: start;

}
h4{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
}
`

export const Buttun=styled.div`

display: flex;
justify-content: space-between;


button{
  p{
    color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
  }
  width: 291.325px;
height: 35px;
flex-shrink: 0;
border-radius: 10px;
border: 1px solid var(--blue, #006DAB);

background-color: white;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
}

`
