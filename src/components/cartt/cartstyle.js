import styled from "styled-components";

export const Maindiv=styled.div`


gap: 45px;
display: flex;
justify-content: center;
align-items: start;

`
export const Leftdiv=styled.div`

width: 811px;
display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
height: 476px;
flex: 2;
flex-shrink: 0;
border-radius: 10px;
background: #FFF;

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
img{margin: 0px 60px;
      width: 683px;
height: 406px;
flex-shrink: 0;
border-radius: 10px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
}
button{display:flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      width: 350px;
      border: none;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);

/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
p{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
}
`
export const Rightdiv=styled.div`

width: 311px;

flex: 1;
flex-shrink: 0;
`
export const Firstdiv=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
h2{padding-bottom:12px;
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
h3{padding-bottom:25px;
      color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
h4{
      color: #373737;
font-family: Montserrat;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
      color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-bottom: 191px;
}
button{
     
      
      width: 311px;
height: 45px;
flex-shrink: 0;
      border-radius: 10px;
background: var(--blue, #006DAB);
border: none;
cursor: pointer;
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
p{text-align:center;
      color: #FFF;
      padding: 11px 44px;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
}

`
export const Seconddiv=styled.div`
h2{
      color: #000;
font-family: Montserrat;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin:42px 0px  30px 0px;
}
p{
      margin: 10px;
      color: rgba(55, 55, 55, 0.80);
font-family: "Open Sans";
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
input{padding-left:20px;
      border: none;
      width: 300px;
height: 50px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(55, 55, 55, 0.10);
}
button{
     
      margin-top: 68px;
     width: 311px;
height: 45px;
flex-shrink: 0;
     border-radius: 10px;
background: var(--blue, #006DAB);
border: none;
cursor: pointer;
/* btn sh */
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
p{text-align:center;
     color: #FFF;
     
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
}
`