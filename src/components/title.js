import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { HeaderBottomSpacing } from "../components/layout"


const TitleBox = styled.section`
  width: 100%;
  background-color: #1354A1;
  padding: 10px 20px 10px 20px;
  color: white;
  height: 100px;
  margin-top: calc(-${_ => HeaderBottomSpacing} - 3px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TitleContent = styled.h1`
  text-align: start;
  font-family: 'Baloo';
  font-size: 35px;
  letter-spacing: 0.05ch;
`

const Title = ({title}) => (
    <TitleBox>
        <TitleContent>{title}</TitleContent>
    </TitleBox>
)

Title.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Title