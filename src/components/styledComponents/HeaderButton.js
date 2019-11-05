import react from "react"
import styled from "styled-components"
import pallete from "../../pallete"
/**
 * when use a button always add p tag 
 */
const HeaderButton = styled.button`
  box-sizing: border-box;
  height:48px;
  width: 220px;
  border: 1px solid ${pallete.color.secondary.main};
  border-radius: 8px;
  background-color:${pallete.color.white.main};
  text-align:center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  span {
    color: ${pallete.color.secondary.main};
    font-family: "Gotham Condensed";
    font-size: 18px;
    font-weight: 300;
    line-height: 19px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-transform:uppercase;
  }
`
export default HeaderButton
