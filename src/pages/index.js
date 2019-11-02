import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

const IndexPage = () => {
  const {allContentfulWorksheet} = useStaticQuery(
    graphql`
      query AllWorksheetIdsQuery {
        allContentfulWorksheet {
          edges {
            node {
              worksheetTitle,
              contentful_id
            }
          }
        }
      }
    `
  )

  const worksheetLinks = allContentfulWorksheet.edges.map(worksheet => (
    <li key={worksheet.node.contentful_id}>
      <Link to={`/${worksheet.node.contentful_id}`}>
        {worksheet.node.worksheetTitle}
      </Link>
    </li>
  ))

  return <ul>{worksheetLinks}</ul>
}

export default IndexPage
