import React from "react"
import styled from 'styled-components'
import { useAuth } from "react-use-auth"
import { Link } from "gatsby"


const ButtonLink = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;

  :hover, :focus {
    text-decoration: none;
  }
`

const PrivateLink = ({ to, children }) => {
  const { login, isAuthenticated } = useAuth()
  if (!isAuthenticated()) {
    return (
      <ButtonLink href="#" onClick={login}>{children}</ButtonLink>
    )
  } else {
    return (
      <Link to={to}>
        {children}
      </Link>
    )
  }
}

export default PrivateLink
