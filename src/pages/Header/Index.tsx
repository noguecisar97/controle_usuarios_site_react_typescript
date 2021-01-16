import React from 'react'
import WolfLogo from '../../assets/wolficon.png'
import { Container } from './Styled'

const Header = (): JSX.Element => {
  return (
    <Container>
      <img src={WolfLogo} alt="" />
      <h2>Wolf Dashboard</h2>
    </Container>
  )
}

export default Header
