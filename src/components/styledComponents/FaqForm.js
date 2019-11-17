import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import {Link} from 'gatsby'

const FormContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: rgba(176, 176, 176, 0.1);
`
const FormWrapper = styled.div`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormInputContainer = styled.form`
  width: 90%;
  margin: 0 3em 3em 3em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
const SimpleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 42%;
  @media(max-width:1600px){
    width:48%;
  }
 
  @media (max-width: 1024px) {
    width: 74%;
  }
  @media (max-width: 768px) {
    width: 88%;
  }
  @media (max-width: 550px) {
    width: 99%;
  }
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px 3em 0px;
  width: ${props => props.width || "100%"};
  span {
    color: #313131;
    font-size: 18px;
  }
  @media (max-width: 769px) {
  }
`
const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 118px;
  width: 620px;
  border: 1px solid #b0b0b0;
  border-radius: 4px;
  background-color: #ffffff;
  @media (max-width: 769px) {
    width: 550px;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`
 const InputSpace = styled.div`
    display        : flex;
    flex-direction : column;
    justify-content: space-evenly;
    margin         : 10px 0px;
    width          : 45%;
    @media ( max-width: 1600px ){
        width: 45%;
    }
    @media ( max-width: 700px ){
        width: 100%;
    }
    @media ( max-width: 700px ){
        width: 100%;
    }
    @media ( max-width: 700px ){
        width: 100%;
    }
`
const InputElem = styled.input`
    border       : 1px solid #B0B0B0;
    border-radius: 4px;
    padding      : 10px 10px;
    outline      : none;
    width        : 100%;
`
const Span = styled.span`
    color    : #313131;
    font-size: 18px;
`
const FaqForm = () => {
  return (
    <FormContainer>
      <FormWrapper>
        <Title text="Manda tus dudas, las responderemos vía correo electrónico. Deja tu contacto." />
        <FormInputContainer
          action="https://formspree.io/xqkklngk"
          method="POST"
          name="contact-form"
        >
          <input
            type="hidden"
            name="_next"
            value="peaceful-sinoussi-e5a1a5.netlify.com/gracias/"
          />
          <SimpleContainer>
            <InputSpace>
            <Span>Nombre</Span>
            <InputElem type="text" name="nombre" id=""/>
            </InputSpace>
            <InputSpace>
            <Span>Email</Span>
            <InputElem type="email" name="email" id=""/>
            </InputSpace>
          </SimpleContainer>
          <TextContainer>
            <span>Escribe tu duda o mensaje</span>
            <TextArea name="mensaje" cols="30" row="10" width={"90%"} />
          </TextContainer>
          <Link to='/gracias/'></Link>
          <button
            className="btn-send-contact"
            type=""
            uk-toggle="target: #modal-close-default"
          >
            ENVIAR
          </button>
          <div id="modal-close-default" uk-modal="true">
            <div className="uk-modal-dialog uk-modal-body">
              <h2 className="uk-modal-title modal-title">
                ¡Hemos recibido tu mensaje!
              </h2>
              <p className="modal-body">
                Te sugerimos estar al pendiente de tu correo electrónico, para
                recibir nuestra respuesta.
              </p>
              <Link to="/gracias/">Continuar</Link>
            </div>
          </div>
        </FormInputContainer>
      </FormWrapper>
    </FormContainer>
  )
}

export default FaqForm
