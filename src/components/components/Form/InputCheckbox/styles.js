import styled from "styled-components"

export const Space = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Span = styled.p`
  margin-top: 0px !important;
  margin-left: 10px;
  width: ${props => props.firstWid || "auto"};
`
