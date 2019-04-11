import React from 'react'
import styled from 'styled-components'

import rem from '../utils/rem'

const Wrapper = styled.div`
  min-height: ${rem(100)};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: #39FF14;
  color: black;
`

const FooterLink = styled.a`
  color: black;
  text-decoration: underline;
  transition: opacity: 0.2s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`

export default () => (
  <Wrapper>
    <p>
      A <FooterLink href="https://github.com/Hurste">Games and Cheese Productions</FooterLink>, powered by <FooterLink href="https://gatsbyjs.org">Gatsby</FooterLink>
    </p>
  </Wrapper>
)
