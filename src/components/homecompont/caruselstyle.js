import styled from "styled-components";
export const Recomen = styled.div`
  h2 {
    color: var(--text, #373737);
    font-family: Gilroy;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 313px;
    height: 182px;
    flex-shrink: 0;
  }
  div div {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const Buttton = styled.button`
  border: 0px;
  cursor: pointer;
  clip-path: polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%);
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 259px;

  height: 45px;
  flex-shrink: 0;
  background-color: var(--blue, #006dab);
`;

export const Recline = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row !important;

  align-items: center;
`;
