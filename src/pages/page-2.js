import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>и вот вторая страница</h1>
    <p>бобро пожалловать 2</p>
    <Link to="/">вернуться на первую</Link>
  </Layout>
)

export default SecondPage
