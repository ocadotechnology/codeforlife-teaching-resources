/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle } from "styled-components"


import Header, { HeaderHeight } from "./header"

export const HeaderBottomSpacing = "40px"

const Page = styled.table`
  background: white;
  width: 100%;
  box-sizing: border-box;
`

const Content = styled.main`
  padding-left: ${props => props.sideMargin};
  padding-right: ${props => props.sideMargin};
`

const HeaderSpace = styled.div`
  height: calc(${props => props.headerHeight} + ${props => props.topMargin} + ${_ => HeaderBottomSpacing});
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }

  table { 
    border-spacing: 0;
    border-collapse: collapse;
  }
`

const Layout = ({ children, leftAndRightMargin, topAndBottomMargin, resourceSectionName }) => {
  return (
    <>
      <GlobalStyle />
      <Header 
        worksheetTitle={resourceSectionName} 
        topMargin={topAndBottomMargin} 
        sideMargin={leftAndRightMargin} />
      <Page size="A4">
        <thead>
          <tr>
            <td>
              <HeaderSpace 
                headerHeight={HeaderHeight}
                topMargin={topAndBottomMargin} />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Content sideMargin={leftAndRightMargin}>
                {children}
              </Content>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <HeaderSpace 
                headerHeight={HeaderHeight}
                topMargin={topAndBottomMargin} />
            </td>
          </tr>
        </tfoot>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </Page>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  leftAndRightMargin: PropTypes.string,
  topAndBottomMargin: PropTypes.string,
}

Layout.defaultProps = {
  leftAndRightMargin: "50px",
  topAndBottomMargin: "40px"
}

export default Layout
