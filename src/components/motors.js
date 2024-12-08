import styled from "styled-components";
import imageba from "../assets/backgroundimagemotor.jpg";
export const Bigdiv = styled.div`
  padding: 70px;
  display: flex;
  justify-content: center;
  
`;

export const Homecop = styled.div`
  background-image: url(${imageba});
  background-position: center;
  background-size: cover;

  height: 350px;
  background-repeat: no-repeat;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;
export const Leftdiv = styled.div`
      width: 227px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  label {
    color: #000;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 14px */
  }
  div {
    h4 {
      color: var(--text, #373737);
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%; /* 18px */
    }
    p {
      color: var(--text, #373737);
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 14px */
    }
  }
`;
export const Line = styled.div`
  width: 240px;
  margin-top: 5px;
  height: 1px;
  background: rgba(55, 55, 55, 0.3);
`;
export const Price = styled.input`
  width: 81px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(55, 55, 55, 0.6);
`;
export const Table = styled.div`
  display: flex;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
`;
export const Nameoffilt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Buttonsecond = styled.button`
  width: 115.804px;
  height: 38.968px;
  flex-shrink: 0;
  border-radius: 60px;
  background: var(--sariq, #ff7a00);
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 0px;
  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
export const Button = styled.button`
  width: 115.804px;
  height: 38.968px;

  flex-shrink: 0;
  border-radius: 60px;
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: 0px;
  background: var(--blue, #006dab);

  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;
export const Buttond = styled.div`
  display: flex;
`;
export const Compare = styled.div`
  h3 {
    color: var(--blue, #006dab);
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  div img {
    margin-right: -10px;
  }

  div {
    align-items: center;
    justify-content: center;
    display: flex;
    margin-right: -10px;
  }
`;
export const Rightb = styled.button`
  color: #fff;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 60px;
  background: var(--blue, #006dab);


  /* btn sh */
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  width: 115.804px;
  height: 38.968px;
  flex-shrink: 0;

  border: 0px;
`;

export const Rightdiv = styled.div`
  
  margin-left: 5%;
`;
export const Navtable = styled.div`
  display: flex;
  align-items: center;
  
  justify-content: center ;
`;
export const Leftnavbar = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  justify-content: center;
  input{border-radius:5px;
    width: 100%;
  padding: 10px;
  font-size: 16px;
  margin: 0px 20px;
  height: 15px;
 border-color:white;
  }
  p {display:flex;
    gap: 5px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 18px */
  }
  span {
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
  }
`;
export const Stright = styled.div`

  div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;
  }
`;
export const Rightnavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
export const Fisrtsearch = styled.div`
 
`;
export const Secondsearch = styled.div``

export const Thirdsearch = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding-left: 10px;
    width: 60px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid rgba(55, 55, 55, 0.3);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
  }
`;
export const Foursearch = styled.div`
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 0px 5px 5px 0px;
    border: 1px solid rgba(55, 55, 55, 0.3);
  }
`;
export const Menucars = styled.div`
  width: 1030px;
  height: 1px;
  margin-top: 2px;
  border: 1px solid red;

  background: rgba(55, 55, 55, 0.5);
`;
export const Menucar = styled.div`
  padding-top: 20px;

  display: grid;
  grid-template-areas: "a a a a";
  
  @media only screen and (max-width: 1340px) {
   gap:10px;
   display: grid;
   grid-template-areas: "a a a a";
}

@media only screen and (max-width: 1063px) {
   gap:20px;

}
@media only screen and (max-width: 1000px) {
  display: none;
}
@media only screen and (max-width: 450px) {
   
}
`;
export const Cars = styled.div`
  padding: 10px;
  flex-direction: column;

  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 222.42px;
    height: 137.433px;
    border-radius: 20px;
  }
  div {
    display: flex;
    padding-bottom: 10px;
    align-items: center;
    justify-content: space-between;
  }
  div p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h4 {
    padding-bottom: 10px;
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 10px;
  }
  h3 {
    padding-bottom: 15px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  button {
    width: 94px;
    height: 35px;
    flex-shrink: 0;
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background-color: white;
    border-radius: 10px;
    border: 1px solid var(--blue, #006dab);

    /* btn sh */
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  }
`;
