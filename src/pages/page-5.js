import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Page 5</h1>
      <h3>
        Dude, this NavBar is wicked awesome, I hope you enjoy it as much as me!
      </h3>
      <Lorem />
    </Content>
  </Layout>
)