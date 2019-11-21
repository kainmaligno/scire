import React from "react"
import Layout from "../components/layout"
import Title from "../components/components/Title"
import Form from "../components/components/Form"
import styled from "styled-components"

const Space = styled.div`
  background-color: rgba(176, 176, 176, 0.1);
  width: 100%;
`

const Agendar = () => {
  return (
    <Layout>
      <Space>
        <Title text="AGENDA TU CITA" />
        <Form />
      </Space>
    </Layout>
  )
}

export default Agendar
