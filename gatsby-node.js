/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const {data: {allContentfulWorksheet}} = await graphql(`
    query AllWorksheetIdsQuery {
      allContentfulWorksheet {
        edges {
          node {
            worksheetTitle
            contentful_id
          }
        }
      }
    }
  `)
  const template = path.resolve("src/templates/worksheet.js")
  allContentfulWorksheet.edges.forEach(worksheet => {
    createPage({
      path: `/${worksheet.node.contentful_id}`,
      component: template,
      context: {
        contentful_id: worksheet.node.contentful_id,
      },
    })
  })
}
