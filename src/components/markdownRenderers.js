import React from "react"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const StyledCode = styled(SyntaxHighlighter)`
  font-size: 1.2vw;
  page-break-inside: avoid;
`

const code = ({ value }) => {
  return (
    <StyledCode
      language="python"
      style={atomDark}
      showLineNumbers
    >
      {value}
    </StyledCode>
  )
}
const inlineCode = styled.code`
  font-family: source-code-pro;
  color: #4aace7;
  font-weight: bold;
`

export default {
  code,
  inlineCode,
}
