import React from 'react'
import styled from 'styled-components'
import BodyContent from './bodyContent'
import ReactMarkdown from 'react-markdown'
import markdownRenderers from './markdownRenderers'

const StyledTable = styled.table`
  width: calc(100% + 4em);
  border-collapse: separate;
  border-spacing: 2em 0.5em;
  margin-left: -2em;
  page-break-inside: avoid;
`

const StyledTableHeading = styled.th`
  text-align: left;
  padding-bottom: 0.5em;
  border-bottom: 2px solid #e17b2b;
  font-weight: normal;
`

const StyledTableCell = styled.td`
  vertical-align: top;
  padding-bottom: 0.5em;
  border-bottom: 2px solid #e17b2b;
`

const Table = ({
  tableData: {
    internal: { content }
  }
}) => {
  const tableContent = JSON.parse(content).table
  const columnWidth = 100 / tableContent.header.length
  return (
    <BodyContent>
      <StyledTable>
        <thead>
          <tr>
            {tableContent.header.map((heading, index) => (
              <StyledTableHeading key={index} width={`${columnWidth}%`}>
                <ReactMarkdown
                  source={heading}
                  renderers={markdownRenderers}
                  disallowedTypes={['paragraph']}
                  unwrapDisallowed
                />
              </StyledTableHeading>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableContent.body.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <StyledTableCell key={`cell(${rowIndex}, ${columnIndex})`}>
                  <ReactMarkdown
                    source={cell}
                    renderers={markdownRenderers}
                    disallowedTypes={['paragraph']}
                    unwrapDisallowed
                  />
                </StyledTableCell>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </BodyContent>
  )
}

export default Table
