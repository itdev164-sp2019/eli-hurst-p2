import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Page 3</h1>
      <h3>
        Hello! This content is meh, but that NavBar though...
      </h3>
      <Lorem />
    </Content>
  </Layout>
)
