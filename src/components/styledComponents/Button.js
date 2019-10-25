import react from "react"
import styled from "styled-components"
import pallete from "../../pallete"

/**
 * when use a button always add p tag 
 */
const Button = styled.button`
  height: 5.78%;
  width: 21.48%;
  border-radius: 8px;
  background-color:${pallete.color.primary.main};
  p{
    height: 19px;
  width: 200px;
  color: ${pallete.color.white.main};
  font-family: "Gotham Condensed";
  font-size: 18px;
  font-weight: 300;
  line-height: 19px;
  text-align: center;
  }
`
export default Button
