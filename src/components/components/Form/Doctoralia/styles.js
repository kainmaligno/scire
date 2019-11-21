import styled from "styled-components"

export const DoctoraliaBtn = styled.div`
  margin-top: 10px;
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 414px) {
    width: 100%;
    justify-content: center;
    margin-top: 2em;
  }
  @media (max-width: 375px) {
    width: 100%;
    justify-content: center;
    margin-top: 2em;
  }
`
export const Btn = styled.button`
  background-color: #00999e;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 4px rgba(109, 109, 109, 0.3);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  outline: none;
  padding: 10px 25px;
  position: absolute;
  right: 0px;
`
