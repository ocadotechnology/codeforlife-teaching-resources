import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

export const HeaderHeight = "60px"

const HeaderLayout = styled.div`
  width: calc(100% - (${props => props.sideMargin} * 2) - 2px);
  height: ${_ => HeaderHeight};
  background-color: #343434;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  position: fixed;
  top: ${props => props.topMargin};
  left: calc(${props => props.sideMargin} + 1px);
`

const Heading = styled.h2`
  font-family: "Source Sans Pro";
  font-weight: 400;
  font-size: 25px;
  margin: 0;
  letter-spacing: 0.03ch;
`

const Header = ({ worksheetTitle, topMargin, sideMargin }) => (
  <HeaderLayout topMargin={topMargin} sideMargin={sideMargin}>
    <Heading>{worksheetTitle}</Heading>
  </HeaderLayout>
)

Header.propTypes = {
  worksheetTitle: PropTypes.string,
  topMargin: PropTypes.string.isRequired,
  sideMargin: PropTypes.string.isRequired,
}

Header.defaultProps = {
  worksheetTitle: "Worksheet Title",
}

export default Header
