import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Title from "../components/title"

import sliceToComponent from "../sliceToComponent"

export const query = graphql`
  query WorksheetQuery($contentful_id: String!) {
    contentfulWorksheet(contentful_id: { eq: $contentful_id }) {
      worksheetTitle
      resourceSection
      content {
        ... on ContentfulSubheading {
          __typename
          name
        }
        ... on ContentfulFullWidthText {
          __typename
          content {
            content
          }
        }
        ... on Contentful2ColumnLayout {
          __typename
          heading {
            ... on ContentfulSubheading {
              name
            }
          }
          leftColumn {
            json
          }
          rightColumn {
            json
          }
        }
        ... on ContentfulTable {
          __typename
          tableName
          tableData {
            internal {
              content
            }
          }
        }
      }
    }
  }
`

const Worksheet = ({ data: { contentfulWorksheet } }) => {
  if (contentfulWorksheet === null) {
    return <></>
  }
  return (
    <Layout resourceSectionName={contentfulWorksheet.resourceSection}>
      <SEO title="Home" />
      <Title title={contentfulWorksheet.worksheetTitle} />
      {contentfulWorksheet.content.map(sliceToComponent)}
    </Layout>
  )
}

Worksheet.query = query

export default Worksheet
