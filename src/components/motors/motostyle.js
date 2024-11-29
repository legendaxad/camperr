import styled from "styled-components";
import Datilimg from "../../assets/dtailbackgrounf.svg"
export const Hmenuca=styled.div`
display: grid;
grid-template-areas: 'a a a a';
    width: 850px;
gap: 20px;

padding-top: 20px;

`


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
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
align-items: start;

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



//Detailmotor below

export const Datailback=styled.div`
background-image: url(${Datilimg});

background-position: center;
background-size: cover;
height: 704px;
background-repeat: no-repeat;

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
      color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 60px;
font-style: normal;
font-weight: 700;
line-height: normal;

}
Button{
      color: white;
      border-color:white;
      width: 181.5px;
height: 50.014px;
flex-shrink: 0;
color: #FFF;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
}


`
export const MainDetaildiv=styled.div`
display: flex;
flex-direction: column;



`
export const Firstdiv=styled.div`
padding: 20px 0px;
display: flex;
gap: 20px;
flex: 1;
justify-content: center;


div img{
      padding: 50px;
      width: 626px;
height: 381px;
flex-shrink: 0;
border-radius: 10px;

box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
background: #FFF;
}
`
export const CArinfo=styled.div`
display: flex;
flex-direction: column;
height: 396px;

padding:5px 70px 80px 13px;

border-radius: 10px;

box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
background: #FFF;
`
export const Updiv=styled.div`
display: flex;
justify-content: space-between;
padding: 25px 55px 0px 25px;

div h2{
      color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding-bottom: 10px;
}
div p{
      color: #000;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
b{
      color: #006DAB;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}

`
// // export const MiddleLine=styled.div`
// // width: 500px;
// // display: flex;
// // justify-content: center;align-items:center;

// // height: 1px;
// // background: rgba(55, 55, 55, 0.30);

// `
export const Belowdiv=styled.div`
display: flex;
justify-content: space-between;
padding: 40px 170px 0px 25px;


div p{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-bottom: 10px;
}
`
export const SecondDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex:1;
div{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{padding:0px 60px;
            color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
      }
      h2{padding-left:60px;
            color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
      }
}
img{
      flex: 1;
      }
`
export const Buttonlast=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
div{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p{padding:0px 60px;
            color: #373737;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 150% */
      }
      h2{
            color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
      }
}
img{
      flex: 1;
      }
      
`
export const Buttonsa=styled.div`

display: flex;
flex-direction: row  !important;
gap: 20px;
padding: 0px 60px;

justify-content: start !important;

Button{
      width: 180px;
}
`
