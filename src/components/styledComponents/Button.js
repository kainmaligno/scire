import React from "react"
import styled from "styled-components"
import pallete from "../../pallete"

/**
 * when use a button always add p tag 
 */
const Button = styled.button`
  height: 48px;
  width: 220px;
  border-radius: 8px;
  background-color:${pallete.color.primary.main};
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  p{
    /* height: 19px;
  width: 200px; */
  color: ${pallete.color.white.main};
  font-family: "Gotham Condensed";
  font-size: 18px;
  font-weight: 300;
  line-height: 19px;
  text-align: center;
  }
`
export default Button
