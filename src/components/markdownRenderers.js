import React from "react"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const code = ({ value }) => {
  return (
    <SyntaxHighlighter
      language="python"
      style={{ ...atomDark, fontSize: "0.9em" }}
      showLineNumbers
    >
      {value}
    </SyntaxHighlighter>
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
