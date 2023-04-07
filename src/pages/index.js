import * as React from "react"

import SEO from "../components/SEO/SEO"

import Layout from "../components/Layout/Layout"

const IndexPage = () => (
  <div>
    <Layout>
      <h1>Olaaa</h1>
    </Layout>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <SEO title="Home" />

export default IndexPage
