import React from 'react'
import styled from 'styled-components'

export const documentToReactComponentsOptions = {
    renderNode: {
      'embedded-asset-block': (node) => {
        return (<img alt={node.data.target.fields.title["en-US"]} src={node.data.target.fields.file["en-US"].url}/>)
      }
    }
  }

const BodyContent = styled.div`
  font-family: 'Source Sans Pro';
  padding-left: 20px;
  padding-right: 20px;
`

export default BodyContent
