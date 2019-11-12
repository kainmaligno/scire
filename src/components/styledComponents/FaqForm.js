import React,{useState} from 'react'
import styled from 'styled-components'
import Title from '../components/Title'
import Input from '../components/Form/Input'
import Button from '../styledComponents/Button'
const FormContainer = styled.div`
     width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(176,176,176,0.1);
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
    width:90%;
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
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
`
const TextContainer = styled.div`
 display        : flex;
    flex-direction : column;
    justify-content: flex-start;
    align-items:center;
    margin         : 10px 0px 3em 0px;
    width          : ${ props => props.width || "100%"};
    span{
        color    : #313131;
    font-size: 18px;
    }
`
const TextArea = styled.textarea`
	box-sizing: border-box;	
    height: 118px;	width: 620px;	
    border: 1px solid #B0B0B0;	
    border-radius: 4px;	
    background-color: #FFFFFF;
`
const FaqForm = () =>{
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')

 function Name(e){
     setName(e.target.value)
 }
 function Email(e){
     setEmail(e.target.value)
 }
return (
  <FormContainer>
    <FormWrapper>
      <Title text="Manda tus dudas, las responderemos vía correo electrónico. Deja tu contacto." />
      <FormInputContainer>
        <SimpleContainer>
          <Input
            action={Name}
            label={"Nombre"}
            required={true}
            value={name}
            width={"40%"}
          />
          <Input
            action={Email}
            label={"Email"}
            required={true}
            value={email}
            width={"40%"}
          />
        </SimpleContainer>
        <TextContainer>
            <span>Escribe tu duda o mensaje</span>
          <TextArea name="mensaje" cols="30" row="10"width={"90%"}/>
        </TextContainer>
        <Button> <p>ENVIAR</p></Button>
      </FormInputContainer>
    </FormWrapper>
  </FormContainer>
)
}

export default FaqForm