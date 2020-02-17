import React from "react"
import styled from "styled-components"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"

let atomDarkModified = JSON.parse(JSON.stringify(atomDark))
atomDarkModified['code[class*="language-"]'].whiteSpace = 'pre-wrap';

const StyledCode = styled(SyntaxHighlighter)`
  font-size: 0.65em;
  page-break-inside: avoid;
`

const StyledImage = styled.img`
  width: 100%;
`

const blockquote = styled.blockquote`
  background-color: #ffe2b3;
  border-radius: 0.3em;
  padding: 1em;
  margin: 0.5em 0px;
  page-break-inside: avoid;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: 0em;
  }
`

const code = ({value, language}) => {
  const computedLanguage = language ?? "python"
  return (
    <StyledCode
      language={computedLanguage}
      style={atomDarkModified}
      showLineNumbers={computedLanguage !== "console"}
      wrapLines
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

const image = ({ alt, src }) => <StyledImage alt={alt} src={src} />

export default {
  code,
  inlineCode,
  image,
  blockquote,
}
