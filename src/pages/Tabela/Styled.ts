import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;

  table {
    max-width: 1100px;
  }

  .btn-primary {
    margin: 1px;
  }

  @media (max-width: 760px) {
    table {
      font-size: 10px;
    }
  }

  .table td {
    padding: unset;
    vertical-align: unset;
    text-align: center;
    justify-content: center;
  }

  .table th {
    text-align: center;
  }

  .btn-secondary {
    margin: 20px 0;
  }

  .ui.button {
    display: unset;
    padding: 10px;
    margin: 0 1px;
    vertical-align: unset;
  }
`
