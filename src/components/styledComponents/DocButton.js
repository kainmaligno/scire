import styled from "styled-components"
import pallete from "../../pallete"

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content:space-around;
  box-sizing: border-box;
  height: 48px;
  width: auto;
  border: 1px solid ${pallete.color.secondary.main};
  border-radius: 8px;
  background-color: #ffffff;
  -webkit-transition: color 300ms;
  transition: color 300ms;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  span{
    color: #ffffff;
    margin-right: 15px;
    margin-left: 15px;
  }
  img.img-none{
    display:none;
    animation: doctoralia 0.5s 1;
  }
  &:hover {
    span{
      color: ${pallete.color.secondary.main};
    }
    img.img-1{
      display:none;
    }
    img.img-none{
      display:block;
    }
    @keyframes doctoralia {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  span {
    font-family: "Gotham Condensed";
    font-size: 18px;
    font-weight: 300;
    line-height: 19px;
    text-transform: uppercase;
  }
  &:before {
    border-radius: 6px;
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${pallete.color.secondary.main};
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
    background: #ffffff
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
`
export default HeaderButton
