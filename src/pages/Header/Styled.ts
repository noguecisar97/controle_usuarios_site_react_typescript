import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 80px;

  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }
`
