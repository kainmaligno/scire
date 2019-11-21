import styled from "styled-components"

export const Calen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;
  width: 46%;
  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Span = styled.span`
  margin: 5px 0px;
`
export const Input = styled.input`
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  padding: 10px 10px;
  outline: none;
  width: 100%;
`
