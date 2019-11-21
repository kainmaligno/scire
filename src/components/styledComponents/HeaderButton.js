import styled from "styled-components"
import pallete from "../../pallete"

const HeaderButton = styled.button`
  box-sizing: border-box;
  height: 40px;
  width: 160px;
  border: 1px solid ${pallete.color.secondary.main};
  border-radius: 8px;
  background-color: ${pallete.color.secondary.main};
  -webkit-transition: color 300ms;
  transition: color 300ms;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: ${pallete.color.secondary.main};
  &:hover {
    color: #fff;
  }
  span {
    font-family: "Gotham Condensed";
    font-size: 18px;
    font-weight: 300;
    line-height: 19px;
    text-transform: uppercase;
  }
  &:before {
    border-radius: 7px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #ffffff;
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    -webkit-transform-origin: 50%;
    transform-origin: 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition: 300ms ease-out;
    transition: 300ms ease-out;
  }
  &:hover:before {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    span {
    }
  }
`
export default HeaderButton
