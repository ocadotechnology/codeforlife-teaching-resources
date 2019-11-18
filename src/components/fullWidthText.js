import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BodyContent, { documentToReactComponentsOptions } from './bodyContent'

const FullWidthText = info => {
  
  return (
      <BodyContent>
          {documentToReactComponents(info.content.json, documentToReactComponentsOptions)}
      </BodyContent>
  )
}

export default FullWidthText
