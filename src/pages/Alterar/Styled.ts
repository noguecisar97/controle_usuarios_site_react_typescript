import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  form {
    max-width: 1000px;
    width: 100%;
  }
  .btn-primary {
    width: 250px;
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};

    &:hover {
      filter: grayscale(20%);
    }
  }
`
export const Input = styled.input``
