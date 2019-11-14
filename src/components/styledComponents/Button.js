import styled from "styled-components"
import pallete from "../../pallete"

const Button = styled.button`
  height: 55px;
  width: 280px;
  border: none;
  border-radius: 8px;
  background-color: #530e40;
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
  -webkit-transition: color 300ms;
  transition: color 300ms;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  span {
    color: ${pallete.color.secondary.main};
    font-family: "Gotham Condensed";
    font-size: 24px;
    font-weight: 300;
    line-height: 19px;
    text-transform: uppercase;
    &:hover {
      color: #fff;
    }
  }

  &: before {
    border-radius: 7px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${pallete.color.primary.main};
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition: 300ms ease-out;
    transition: 300ms ease-out;
  }

  &: hover:before {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    span {
    }
  }
`
export default Button
