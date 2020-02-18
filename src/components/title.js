import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { HeaderBottomSpacing } from "../components/layout"
import logo from "../images/cfl-logo.svg"

const TitleLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TitleBox = styled.section`
  width: 100%;
  background-color: #1354a1;
  padding: 10px 20px 10px 20px;
  color: white;
  height: 100px;
  margin-top: calc(-${_ => HeaderBottomSpacing} - 3px);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`

const TitleContent = styled.h1`
  text-align: start;
  font-family: "Baloo";
  font-size: 35px;
  letter-spacing: 0.05ch;
  margin: 0;
`

const SubtitleContent = styled.h1`
  text-align: start;
  font-family: "Baloo";
  font-size: 25px;
  letter-spacing: 0.05ch;
  margin: 0;
  margin-top: -0.4em;
`

const Logo = styled.img`
  height: 140px;
  width: 140px;
  transform: translateY(-60px)
`

const renderSubtitle = subtitle => {
  if (subtitle) {
    return <SubtitleContent>{subtitle}</SubtitleContent>
  }
}

const Title = ({ title, subtitle }) => (
  <TitleBox>
    <TitleLayout>
      <TitleContent>{title}</TitleContent>
      {renderSubtitle(subtitle)}
    </TitleLayout>
    <Logo src={logo} alt="Logo" />
  </TitleBox>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default Title
