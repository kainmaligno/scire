/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
/**Nos permite crear nuevos nodos a partir de la extencion .md determinanndo un slug 
 * que no es otra cosa que la extraccion de el ultimo eslabon de nuestra ruta 
 * http://localhost:8000/estudios/${variable que sera el slug} = estudios_algo
 */
module.exports.onCreateNode =  ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}
/**Nos permite crear paginas una ves que formamos el nodo con una llamada a graphql 
 * y la accion de crear apartir de su segundo parametro @function actions 
 * path llama a la direccion de el archivo que sera el molde 
 */
module.exports.createPages = async ({graphql, actions}) =>{
    const {createPage } = actions
    const studioTemplate = path.resolve('./src/components/styledComponents/Estudios/FullStudio.js')
    const res = await graphql(`
    query{
        allMarkdownRemark{
            edges{
                node{
                    fields{
                        slug
                    }
                }
            }
        }
    }
    `)
   res.data.allMarkdownRemark.edges.forEach((edge) => {
       createPage({
           component:studioTemplate,
           path:`${edge.node.fields.slug}`,
           context:{
               slug:edge.node.fields.slug
           }
       })
   })
}
/**Permite pasar el test de build por usar un modulo de contenido uikit gatsby necesita tener la informacion de 
 * estos modulos al generar el dom parece ser un error de transicion entre gatsby 2 y react 17 se realiza parche con 
 * esta @function onCreateWebpackConfig y/o se puede usar el import del modulo despues de un componentDidMount o 
 * el hook useEffect 
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /uikit/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}