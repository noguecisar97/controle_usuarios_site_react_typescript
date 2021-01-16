import styled from 'styled-components'

export const Navegador = styled.nav`
  width: 100%;
  height: 40px;

  background-color: #fff;

  ul {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0 15px 0 15px;
  }

  a {
    font-size: 1rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};

    &:hover {
      font-size: 1.1rem;
      color: #000;
      text-decoration: none;
    }
  }
`
