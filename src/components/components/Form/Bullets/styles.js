import styled from "styled-components"

export const Space = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 0px 0px 10px 0px;
  width: 100%;
  @media (max-width: 500px) {
    justify-content: space-between;
    width: 75%;
  }
`

export const Inputs = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 20px;
  }
`

export const Span = styled.span`
  width: 30%;
  @media (max-width: 500px) {
    width: auto;
  }
`
