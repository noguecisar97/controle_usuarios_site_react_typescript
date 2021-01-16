import styled from 'styled-components'

export const Content = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .valorMensal {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const Quadro = styled.div`
  width: 200px;
  height: 120px;
  border: solid 2px #770aff;
  padding: 20px;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-bottom: unset;
  }

  div.status {
    display: flex;
    justify-content: space-around;
    height: 60px;
    align-items: center;

    div {
      display: flex;
    }
  }

  div.statusTotal {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    align-items: center;

    div {
      display: flex;
    }
  }

  h4 {
    text-align: center;
    margin: 0;
    padding: 5px;
    font-size: 14px;
    color: #fff;
  }

  div.renovado {
    width: 15px;
    height: 15px;
    background-color: #00aa00;
    border-radius: 50%;
    margin-right: 4px;
  }

  div.acabando {
    width: 15px;
    height: 15px;
    background-color: #ffff00;
    border-radius: 50%;
    margin-right: 4px;
  }

  div.expirado {
    width: 15px;
    height: 15px;
    background-color: #aa0000;
    border-radius: 50%;
    margin-right: 4px;
  }

  div.pendente {
    width: 15px;
    height: 15px;
    background-color: #ff7f00;
    border-radius: 50%;
    margin-right: 4px;
  }
`
export const Online = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
  font-size: 16px;

  div.online {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00cc00;
  }

  div.offline {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #cc0000;
  }
`
