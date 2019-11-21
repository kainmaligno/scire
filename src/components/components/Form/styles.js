import styled from "styled-components"

export const Space = styled.form`
  margin-left: 20%;
  width: 60%;
  @media (max-width: 1000px) {
    margin-left: 10%;
    width: 80%;
  }
`
export const SelectSpace = styled.div`
  width: 60vw;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 2em;
  select {
    border: 1px solid #b0b0b0;
    border-radius: 4px;
    outline: none;
    width: 27.5vw;
  }
  @media (max-width: 1000px) {
    width: 80vw;
    select {
      width: 36.5vw;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    select {
      width: 100%;
    }
  }
`
export const Subtitle = styled.div`
  margin-top: -45px;
  text-align: center;
  width: 100%;
`
export const Section = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 97%;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`
export const InputSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;
  width: 45%;
  @media (max-width: 500px) {
    width: 100%;
  }
`
export const InputElem = styled.input`
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  padding: 10px 10px;
  outline: none;
  width: 100%;
`
export const Span = styled.span`
  color: #666;
  font-size: 16px;
`
export const SpanViolet = styled.span`
  color: #72295e;
  cursor: pointer;
  font-size: 14px;
  margin-left: 7.5%;
  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 10px;
  }
`
export const EstudiosSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 2em;
`
export const Title = styled.span`
  margin-bottom: 5px;
`
export const TextArea = styled.textarea`
  height: 100px;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  padding: 10px 10px;
  outline: none;
`
export const P = styled.p`
  font-size: 14px;
  width: 100%;
`
export const Action = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`
