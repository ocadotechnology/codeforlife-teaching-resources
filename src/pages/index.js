import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link } from "gatsby"

const IndexPage = () => {
  const {prismic: {allWorksheets}} = useStaticQuery(
    graphql`
      query AllWorksheetUidsQuery {
        prismic {
          allWorksheets {
            edges {
              node {
                worksheet_title
                _meta {
                  uid
                }
              }
            }
          }
        }
      }
    `
  )

  const worksheetLinks = allWorksheets.edges.map(worksheet => (
    <li key={worksheet.node._meta.uid}>
      <Link to={`/${worksheet.node._meta.uid}`}>
        {worksheet.node.worksheet_title[0].text}
      </Link>
    </li>
  ))

  return <ul>{worksheetLinks}</ul>
}

export default IndexPage
