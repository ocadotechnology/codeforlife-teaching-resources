import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import BodyContent from './bodyContent'

const FullWidthText = info => {
  let options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        return (<img className="img-fluid" src={node.data.target.fields.file["en-US"].url}/>)
      }
    }
  }
  return (
      <BodyContent>
          {documentToReactComponents(info.content.json, options)}
      </BodyContent>
  )
}

export default FullWidthText
