import styled from "styled-components";

export const Container = styled.div`
display:flex;

position: fixed; /* Fixes the navbar in place */
  top: 0; /* Aligns it to the top of the viewport */
  left: 0;
  width: 100%; /* Ensures it spans the entire width */
  z-index: 1000; /* Places it above other elements */
  background-color: white; /* Background color of the navbar */
 
  
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
align-items: center;
justify-content: space-evenly;
padding:0px 70px;


div{
padding: 22px 0px 22px 
}
`
export const Menucont = styled.div`
display:flex;
align-items: center;
gap:88px;


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
`;