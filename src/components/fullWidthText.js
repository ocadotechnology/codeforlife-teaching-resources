import React from "react"
import SubHeading from "./subheading"
import BodyContent from "./bodyContent"
import ReactMarkdown from "react-markdown"
import markdownRenderers from "./markdownRenderers"

const renderSubheading = subheading => {
  if (subheading) {
    return (<SubHeading name={subheading.name} />)
  }
}

const FullWidthText = info => {
  return (
    <BodyContent>
      {renderSubheading(info.heading)}
      <ReactMarkdown
        source={info.content.content}
        renderers={markdownRenderers}
      />
    </BodyContent>
  )
}

export default FullWidthText
