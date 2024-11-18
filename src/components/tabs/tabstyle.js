import styled from "styled-components";
export const MainReview=styled.div`
padding:45px 70px 0px ;
display: flex;
justify-content: space-between;

`
export const MAInrevie=styled.div`
p{
      color: var(--text, #373737);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
span{
      color: var(--blue, #006DAB);
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
display:flex;
justify-content: space-between;
`
export const MiddleReview=styled.div`
padding:45px 70px;



`
export const CarinTab=styled.div`
display: flex;
justify-content: space-between;
padding: 20px 0px;
div{
      display: flex;

}
div div{padding-left:20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      
}
img{
      width: 195px;
height: 100px;
flex-shrink: 0;}
`

//question part

export const SecondTab=styled.div`
padding-right: 70px;
p{
      color: #373737;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
}

`
export const SecondMiddle=styled.div`
/* display: flex;
flex-direction:column;
justify-content: center;
align-items: center; */

padding:30px;
border-radius: 10px;
border: 1px solid rgba(0, 109, 171, 0.10);
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10);
display: flex;
gap: 10px;
flex-direction:column;
h2{text-align:center;
      padding-bottom: 10px;
}
#input3 {
    margin-top: 20px;
    width: 390px;
  height: 50px;
  border-radius: 8px;
  padding-left: 10px;
  background-color:rgba(55, 55, 55, 0.10);
  border: none;
}



#input1 {
    margin-top: 10px;
    width: 390px;
  height: 50px;
  border-radius: 8px;
  padding-left: 10px;
  background-color:rgba(55, 55, 55, 0.10);
  border: none;
}


textarea {
  margin-top: 10px;
  width: 390px;
  height: 120px;
  border-radius: 8px;
  padding: 10px;
  background-color: rgba(55, 55, 55, 0.10);
  border: none;
  align-items: start;
  text-align: start;
}

textarea::placeholder {
  color: rgba(55, 55, 55, 0.70);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 14px */
}


#input1::placeholder,
 
  #input3::placeholder {
    color: rgba(55, 55, 55, 0.70);
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 100%; /* 14px */
    
  }
button{
      border-radius: 10px;
background: var(--blue, #006DAB);
width: 390px;
height: 50px;
flex-shrink: 0;
border: none;
cursor: pointer;
p{
      color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 100%; /* 18px */
}

}


`
export const BigSeconddiv=styled.div`
display: flex;
margin: 40px 20px 80px 40px;
justify-content: center;

`
export const BeforeDiv=styled.div`
display: flex;
justify-content: center;
gap: 70px;
margin: 40px 0px 80px 70px;
`
export const Lasttabdiv=styled.div`
img{
      width: 707px;
height: 298px;
flex-shrink: 0;
border-radius: 10px;
background: url(<path-to-image>) lightgray -236.007px -34.061px / 173.41% 152.73% no-repeat;
}
div{

      display: flex;
      justify-content:space-between;
      
      div{
            margin-top:25px;
             padding: 15px 0px 15px 24px;
            border-radius: 8px;
background: #FFF;
box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

            display: block;
            width: 300px;
height: 79px;
flex-shrink: 0;
      }
}

`

