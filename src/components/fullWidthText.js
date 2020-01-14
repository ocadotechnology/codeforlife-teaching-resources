import React from "react"
import BodyContent from "./bodyContent"
import ReactMarkdown from "react-markdown"
import markdownRenderers from "./markdownRenderers"

const FullWidthText = info => {
  return (
    <BodyContent>
      <ReactMarkdown
        source={info.content.content}
        renderers={markdownRenderers}
      />
    </BodyContent>
  )
}

export default FullWidthText
