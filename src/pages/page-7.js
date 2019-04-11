import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Page 7</h1>
      <h3>
        Check out this sweet NavBar! The best part is when it collapses down to a mobile device screen!
      </h3>
      <Lorem />
    </Content>
  </Layout>
)