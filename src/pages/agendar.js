import React, { useState } from "react"
import { useStaticQuery, graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Header from '../components/components/header'
import Title  from "../components/components/Title"
import Form  from "../components/components/Form"

const Agendar = () => {
    const [ minDay, setMinday ] = useState('')
   
    return(
        <Layout>
            <Title text = "AGENDA TU CITA" />
            <Form />
        </Layout>
    )
}

export default Agendar;