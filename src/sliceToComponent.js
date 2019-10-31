import React from "react"
import SubHeading from "./components/subheading"

export default function sliceToComponent(slice, index) {
    switch (slice.type) {
        case "subheading":
            return (<SubHeading key={index} {...slice} />)    
        default:
            break;
    }
}