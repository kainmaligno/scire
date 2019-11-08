import React from 'react'
import { graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from '../../layout'
import Pointer from '../pointer'

const Header = styled.p`
  height: 41px;
  width: 620px;
  color: #16a1b2;
  font-family: "Gotham Condensed";
  font-size: 40px;
  font-weight: 300;
  line-height: 41px;
`
const PostContainer = styled.div`
margin:2em;
padding:2em;
`
const PostWrapper = styled.div`
  height: 720px;
  width: 620px;
  color: #6d6d6d;
  font-family: "Walkway SemiBold";
  font-size: 16px;
  line-height: 20px;
`
 export const query = graphql`
query (  $slug:String!
) {
  markdownRemark(fields:{slug:{eq:$slug}}) {
      fields{
          slug
      }
    frontmatter{
      title
      info
    }
    html
  }
}

`
const FullStudio = (props) =>{
    console.log(props.data.markdownRemark)
return (
    <Layout>
        <Pointer>{`servicios/estudios/${props.data.markdownRemark.fields.slug}`}</Pointer>
        <PostContainer>
            <aside>
                <img src="" alt=""/>
            </aside>
            <div>
            <Header>{props.data.markdownRemark.frontmatter.title}</Header>
            <ul className="post-ul">
                <li>¿Qué es? </li>
                <span>{props.data.markdownRemark.frontmatter.info}</span>
                <li>¿Cómo me preparo para este estudio?</li>
            </ul>
             <PostWrapper dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></PostWrapper>
            </div>
        </PostContainer>
       
    </Layout>
)
}

export default FullStudio;