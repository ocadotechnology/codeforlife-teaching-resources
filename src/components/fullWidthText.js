import React from "react"
import styled from 'styled-components'
import SubHeading from "./subheading"
import BodyContent from "./bodyContent"
import ReactMarkdown from "react-markdown"
import markdownRenderers from "./markdownRenderers"

const StyledFullWidthText = styled.section`
  page-break-inside: avoid;
`

const renderSubheading = subheading => {
  if (subheading) {
    return (<SubHeading name={subheading.name} />)
  }
}

const FullWidthText = info => {
  return (
    <StyledFullWidthText>
      {renderSubheading(info.heading)}
      <BodyContent>
        <ReactMarkdown
          source={info.content.content}
          renderers={markdownRenderers}
        />
      </BodyContent>
    </StyledFullWidthText>
  )
}

export default FullWidthText
