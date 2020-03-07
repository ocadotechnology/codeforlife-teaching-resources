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
    {renderSubheading(info.heading)}
    <BodyContent>
      <ReactMarkdown
        source={info.content.content}
        renderers={markdownRenderers}
      />
    </BodyContent>
  )
}

export default FullWidthText
