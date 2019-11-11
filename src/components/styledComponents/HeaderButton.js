import styled from "styled-components"
import pallete from "../../pallete"

const HeaderButton = styled.button`
  box-sizing: border-box;
  height: 48px;
  width: 200px;
  border: 1px solid ${pallete.color.secondary.main};
  border-radius: 8px;
  background-color: ${pallete.color.white.main};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    color: ${pallete.color.secondary.main};
    font-family: "Gotham Condensed";
    font-size: 24px;
    font-weight: 300;
    line-height: 19px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
`
export default HeaderButton
