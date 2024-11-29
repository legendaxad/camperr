import styled from "styled-components";

export const Order=styled.div`
margin:100px 70px ;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h3{
      color: rgba(55, 55, 55, 0.80);
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const Carorder=styled.div`
display: flex;
 padding: 18px 30px 18px 18px;
width: 1226px;
height: 180px;
flex-shrink: 0;
border-radius: 20px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
img{border-radius:15px;
     
      width: 280px;
height: 100%;
flex-shrink: 0;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
}
`
export const Orderdiv=styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding-left: 30px;
padding: 14px;

`
export const Divorder=styled.div`
display: flex;
align-items: start;
justify-content: space-between;
width: 100%;
div{h3{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h4{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
}}
span{
      color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`
export const Wrapper=styled.div`
padding-top: 90px;
display: flex;
align-self: start;
justify-content: first baseline;
p{ strong{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
      padding-right: 137px;
}
`