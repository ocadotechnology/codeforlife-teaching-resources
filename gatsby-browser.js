/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { navigate } from "gatsby"
import { AuthProvider } from "react-use-auth"
import WebFont from "webfontloader"

const callback_domain = window.location.host.includes("localhost")
  ? "http://localhost:8000"
  : `${window.location.protocol}//${window.location.host}/codeforlife-teaching-resources`

const redirectUri = `${callback_domain}/auth0_callback`

export const onInitialClientRender = () => {
  WebFont.load({
    typekit: {
      id: "mrl4ieu",
    },
  })
}

export const wrapRootElement = ({ element }) => {
  return (
    <AuthProvider
      navigate={navigate}
      auth0_domain="codeforlife.eu.auth0.com"
      auth0_client_id="sY4vn9OrpfMWxK6BqXsW2PWL1ln60G6Z"
      auth0_params={{
        callback_domain,
        redirectUri,
      }}
    >
      {element}
    </AuthProvider>
  )
}
