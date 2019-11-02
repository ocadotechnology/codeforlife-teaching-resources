import React from "react"
import SubHeading from "./subheading"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const TwoColumnLayout = info => {
  console.log(info)
  let options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        console.log(node)
        return (<img className="img-fluid" src={/*node.data.target.fields.file["en-US"].url*/"https://www.google.com/url?sa=i&url=https%3A%2F%2Fnature.mdc.mo.gov%2Fdiscover-nature%2Ffield-guide%2Frainbow-trout&psig=AOvVaw1FR0WycKR9qFw0T3nNPGtm&ust=1572765797421000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCZgaj_yuUCFQAAAAAdAAAAABAD"}/>)
      }
    }
  }
  return (
    <>
      <SubHeading name={info.heading.name} />
      {documentToReactComponents(info.leftColumn.json, options)}
      {documentToReactComponents(info.rightColumn.json, options)}
    </>
  )
}

export default TwoColumnLayout
