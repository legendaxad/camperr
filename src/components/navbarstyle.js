import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content: space-around;
padding: 22px 70px;
@media only screen and (max-width: 450px) {
  padding: 12px 20px;
  }
  @media only screen and (max-width: 1050px) {
  justify-content: space-between;
  
}
`
export const Firstdiv=styled.div`
padding: 0px 10px;
h1{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 38px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

@media only screen and (max-width: 1000px) {
display: flex;
justify-content: center;
align-items: center;
h1{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
}


`

export const Phonedis=styled.div`
@media only screen and (max-width: 1600px) {
   display: none;
}

@media only screen and (max-width: 1062px) {
  display: none;
}
@media only screen and (max-width: 450px) {
  display: flex;
}

`
export const Ipadversion=styled.div`
@media only screen and (max-width: 1600px) {
   display: none;
}

@media only screen and (max-width: 1000px) {
  display: flex;
}
@media only screen and (max-width: 450px) {
  display: none;
}

`

export const Menucont = styled.div`
display:flex;
align-items: center;
gap:88px;
@media only screen and (max-width: 1240px) {
   gap:40px;
}

@media only screen and (max-width: 1063px) {
   gap:20px;
}
@media only screen and (max-width: 1000px) {
  display: none;
}
@media only screen and (max-width: 450px) {
   
}


p{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;

}
`;
export const Salecont=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 23px;
@media only screen and (max-width: 450px) {
   display: none;
  }
`;