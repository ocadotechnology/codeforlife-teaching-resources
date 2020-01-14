import React from "react"
import SubHeading from "./subheading"
import styled from "styled-components"
import BodyContent from "./bodyContent"
import ReactMarkdown from "react-markdown"
import markdownRenderers from "./markdownRenderers"

const TwoColumns = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  column-gap: 20px;
  font-family: "Source Sans Pro";
`

const TwoColumnLayout = info => {
  return (
    <section>
      <SubHeading name={info.heading.name} />
      <BodyContent>
        <TwoColumns>
          <div>
            <ReactMarkdown
              source={info.leftColumn.leftColumn}
              renderers={markdownRenderers}
            />
          </div>
          <div>
            <ReactMarkdown
              source={info.rightColumn.rightColumn}
              renderers={markdownRenderers}
            />
          </div>
        </TwoColumns>
      </BodyContent>
    </section>
  )
}

export default TwoColumnLayout
