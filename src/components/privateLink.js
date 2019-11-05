import React from "react"
import { useAuth } from "react-use-auth"
import { Link } from "gatsby"



const PrivateLink = ({ to, children }) => {
  const { login, logout, isAuthenticated } = useAuth()
  if (!isAuthenticated()) {
    return (
      <a href="#" onClick={login}>{children}</a>
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