import React from "react"
import styled from "styled-components"
import pallete from "../../pallete"

/**
 * when use a button always add p tag
 */
const Button = styled.button`
  height: 55px;
  width: 280px;
  border-radius: 8px;
  border: none;
  background-color: ${pallete.color.primary.main};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${pallete.color.white.main};
    font-family: "Gotham Condensed";
    font-size: 24px;
    text-align: center;
    text-decoration: none !important;
    margin: 0;
  }
`
export default Button
