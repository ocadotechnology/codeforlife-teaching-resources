/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"

const callback_domain =
        typeof window !== "undefined"
            ? `${window.location.protocol}//${window.location.host}/codeforlife-teaching-resources`
            : "http://localhost:8000"

const redirectUri = `${callback_domain}/auth0_callback`

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider
      navigate={navigate}
      auth0_domain="codeforlife.eu.auth0.com"
      auth0_client_id="sY4vn9OrpfMWxK6BqXsW2PWL1ln60G6Z"
      params={{
        callback_domain,
        redirectUri
      }}
    >
      {element}
    </AuthProvider>
  )
}
