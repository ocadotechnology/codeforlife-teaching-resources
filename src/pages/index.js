import React from "react"
import { useAuth } from "react-use-auth"
import { useStaticQuery, graphql } from "gatsby"
import PrivateLink from "../components/privateLink"
import AuthenticationStatus from "../components/authenticationStatus"


const IndexPage = () => {
  const { login, isAuthenticated } = useAuth()
  const { allContentfulWorksheet } = useStaticQuery(
    graphql`
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
    `
  )

  const worksheetLinks = allContentfulWorksheet.edges.map(worksheet => (
    <li key={worksheet.node.contentful_id}>
      <PrivateLink to={`/${worksheet.node.contentful_id}`}>
        {worksheet.node.worksheetTitle}
      </PrivateLink>
    </li>
  ))

  return (
    <>
      <AuthenticationStatus />
      <ul>{worksheetLinks}</ul>
    </>
  )
}

export default IndexPage
