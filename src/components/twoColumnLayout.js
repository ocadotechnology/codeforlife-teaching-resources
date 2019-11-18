import React from "react"
import SubHeading from "./subheading"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { documentToReactComponentsOptions } from './bodyContent'

const TwoColumns = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  column-gap: 20px;
  font-family: 'Source Sans Pro';
  padding-left: 20px;
  padding-right: 20px;
`

const TwoColumnLayout = info => {
  return (
    <section>
      <SubHeading name={info.heading.name} />
      <TwoColumns>
        <div>{documentToReactComponents(info.leftColumn.json, documentToReactComponentsOptions)}</div>
        <div>{documentToReactComponents(info.rightColumn.json, documentToReactComponentsOptions)}</div>
      </TwoColumns>
    </section>
  )
}

export default TwoColumnLayout
