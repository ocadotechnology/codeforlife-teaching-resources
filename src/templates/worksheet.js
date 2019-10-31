import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Title from "../components/title"

import sliceToComponent from "../sliceToComponent"

export const query = graphql`
  query WorksheetQuery($uid: String!) {
    prismic {
      worksheet(uid: $uid, lang: "en-gb") {
        worksheet_title
        resource_section
        body {
          ... on PRISMIC_WorksheetBodySubheading {
            type
            primary {
              subheading
            }
          }
          ... on PRISMIC_WorksheetBody2_column_layout {
            type
          }
        }
      }
    }
  }
`

const Worksheet = ({data: {prismic}}) => {
  if (prismic.worksheet === null) {
    return (<></>)
  }
  return (
    <Layout resourceSectionName={prismic.worksheet.resource_section[0].text}>
      <SEO title="Home" />
      <Title title={prismic.worksheet.worksheet_title[0].text} />
      {prismic.worksheet.body.map(sliceToComponent)}
    </Layout>
  )
}

// Worksheet.query = query

export default Worksheet

