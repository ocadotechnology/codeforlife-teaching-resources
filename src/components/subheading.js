import React from "react"
import styled from "styled-components"

export const SubheadingHeight = "30px"

const SubHeadingBox = styled.div`
  width: 100%;
  background-color: #1354A1;
  padding: 10px 20px 12px 20px;
  margin-block-start: 20px;
  margin-block-end: 20px;
  color: white;
  height: ${_ => SubheadingHeight};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  clip-path: polygon(1% 0%, 99% 0%, 100% 51%, 100% 50%, 99% 100%, 1% 100%, 0 50%, 0 50%);
`

const StyledSubHeading = styled.h2`
  font-family: 'Source Sans Pro';
  font-size: 20px;
  margin: 0;
  letter-spacing: 0.02ch;
`

const SubHeading = ({primary: {subheading}}) => (
  <SubHeadingBox>
    <StyledSubHeading>{subheading}</StyledSubHeading>
  </SubHeadingBox>
)

export default SubHeading
