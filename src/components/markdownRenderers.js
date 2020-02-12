import React from "react"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const StyledCode = styled(SyntaxHighlighter)`
  font-size: 1.2vw;
  page-break-inside: avoid;
`

const StyledImage = styled.img`
  width: 100%;
`

const code = ({ value }) => {
  return (
    <StyledCode language="python" style={atomDark} showLineNumbers>
      {value}
    </StyledCode>
  )
}
const inlineCode = styled.code`
  font-family: source-code-pro;
  color: #4aace7;
  font-weight: bold;
`

const image = ({ alt, src }) => <StyledImage alt={alt} src={src} />

export default {
  code,
  inlineCode,
  image,
}
