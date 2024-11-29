import styled from "styled-components";
export const MainLog = styled.div`
  display: flex;
  justify-content: center;
`;
export const Login = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0px;
  padding: 33px;
  gap: 30px;
  
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  h2 {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button {
    color: #fff;
    font-family: "Open Sans";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border: none;
    width: 449px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--blue, #006dab);
  }
`;
export const Logindiv = styled.div`
  p {
    color: rgba(55, 55, 55, 0.8);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  input {
    padding-left: 15px;
    width: 434px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    border: none;
  }
`;
export const Linediv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const DivOr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  div {
    width: 119.017px;
    height: 1px;
    background: rgba(55, 55, 55, 0.15);
  }
`;
export const Socialmeadia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
  }
`;
export const Buutoon = styled.button`
  border-radius: 20px;
  color: var(--blue, #006dab) !important;
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: #fff !important;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 2px solid var(--blue, #006dab) !important;
`;
export const Regisdiv=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`