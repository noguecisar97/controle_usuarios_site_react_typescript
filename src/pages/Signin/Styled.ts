import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;

  .error {
    border: 2px solid #ff6565;
  }

  .error-message {
    color: #ff6565;
    padding: 0.5em 0.2em;
    height: 1em;
    position: n;
    font-size: 0.8em;
  }

  .invalid-tooltip,
  .valid-tooltip {
    position: unset;
  }

  .btn-primary {
    width: 250px;
    background-color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};

    &:hover {
      filter: grayscale(20%);
    }
  }

  .resp {
    display: flex;
    align-items: center;
    padding: 10px;
  }
`
