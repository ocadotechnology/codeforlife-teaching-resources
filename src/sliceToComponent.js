import React from "react"
import SubHeading from "./components/subheading"
import TwoColumnLayout from "./components/twoColumnLayout"
import FullWidthText from "./components/fullWidthText"

export default function sliceToComponent(slice, index) {
    switch (slice.__typename) {
        case "ContentfulSubheading":
            return (<SubHeading key={index} {...slice} />) 
        case "Contentful2ColumnLayout":
            return (<TwoColumnLayout key={index} {...slice} />) 
        case "ContentfulFullWidthText":
            return (<FullWidthText key={index} {...slice} />)
        default:
            break;
    }
}
