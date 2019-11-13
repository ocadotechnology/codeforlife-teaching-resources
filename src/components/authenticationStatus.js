import React from "react"
import { useAuth } from "react-use-auth"

const AuthenticationStatus = () => {
  const { login, logout, isAuthenticated } = useAuth()
  if (isAuthenticated()) {
    return (
      <>
        <h2>You are logged in and good to go!</h2>
        <button onClick={logout}>Logout</button>
      </>
    )
  } else {
    return (
      <>
        <h2>Please login to access the worksheets</h2>
        <button onClick={login}>Login with Github</button>
      </>
    )
  }
}

export default AuthenticationStatus
