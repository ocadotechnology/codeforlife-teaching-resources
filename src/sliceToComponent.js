import React from "react"
import SubHeading from "./components/subheading"
import TwoColumnLayout from "./components/twoColumnLayout"

export default function sliceToComponent(slice, index) {
    switch (slice.internal.type) {
        case "ContentfulSubheading":
            return (<SubHeading key={index} {...slice} />) 
        case "Contentful2ColumnLayout":
            return (<TwoColumnLayout key={index} {...slice} />) 
        default:
            break;
    }
}
