/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const path = require("path")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const pages = await graphql(`
//     {
//       prismic {
//         allWorksheets {
//           edges {
//             node {
//               _meta {
//                 uid
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   const template = path.resolve("src/templates/worksheet.js")
//   pages.data.prismic.allWorksheets.edges.forEach(edge => {
//     createPage({
//       path: `/${edge.node._meta.uid}`,
//       component: template,
//       context: {
//         uid: edge.node._meta.uid,
//       },
//     })
//   })
// }