import styled from "styled-components";
import Imagecamp from "../../assets/campingbackground.svg";
export const Maincamp = styled.div`
  background-image: url(${Imagecamp});
  background-position: center;
  background-size: cover;
  height: 350px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
  h2 {
    color: #fff;
    font-family: Montserrat;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
`;
export const Campingcenter = styled.div`
  display: grid;
  margin: 80px 0px;
  grid-template-areas: "a a a";
  justify-content: center;
  gap: 30px;
`;
export const Places = styled.div`
  
  
`;
export const Location = styled.div`
  img {
    width: 395px;
    height: 300px;
    flex-shrink: 0;
    border-radius: 10px;

    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 100%
      ),
      url(<path-to-image>) lightgray 50% / cover no-repeat;
  }
  h2 {
    padding-top: 10px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const Campingdiv=styled.div`
display: flex;
margin: 100px 70px;
justify-content: center;
flex-direction: column;
h4{
  color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`
export const Imagescamping=styled.div`


img{
 margin:0px 10px;
  width: 194px;
height: 147px;
flex-shrink: 0;
border-radius: 10px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>) lightgray 50% / cover no-repeat;
}
`
export const Campingtime=styled.div`
display: grid;
grid-template-areas: 'a a';
justify-content: start;
gap: 10px 100px;
p{
  display: flex;
  align-items: center;
  gap: 5px;
}
`