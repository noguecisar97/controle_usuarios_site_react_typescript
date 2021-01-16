import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button } from 'react-bootstrap'
import { Container } from './Styled'
import Table from './GerarTabela/Index'

interface UsuarioDB {
  id: string
  nome: string
  login: string
  telefone: string
  email: string
  boleto: string
  painel: string
  renda: string
  dataInicio: string
  password: string
}

const Tabela = (): JSX.Element => {
  const [usuarios, setUsuarios] = useState<[UsuarioDB]>()

  async function atualizaTabelaUsuarios(page: number) {
    await Axios.get(`http://localhost:3001/Client?_limit=7&_page=${page}`).then(
      resp => {
        setUsuarios(resp.data)
      }
    )
  }

  const criaLista = async (): Promise<void> => {
    await Axios.get('http://localhost:3001/Client?_limit=7&_page=1').then(
      resp => {
        setUsuarios(resp.data)
      }
    )
    const div = document.querySelector('.buttonPages')
    if (div) {
      div.innerHTML = ''
    }
    setTimeout(() => {
      const totalUsuarios = usuarios?.length || 1
      const paginas =
        totalUsuarios % 7 === 0 ? totalUsuarios / 7 : totalUsuarios / 7 + 1
      let x = 1
      for (x; x <= paginas; x += 1) {
        const botao = document.createElement('Button')
        const numeroDaPagina = x
        botao.innerHTML = x.toString()
        botao.className = 'btn btn-primary'
        botao.onclick = () => {
          atualizaTabelaUsuarios(numeroDaPagina)
        }
        div?.append(botao)
      }
    }, 500)
  }

  useEffect(() => {
    criaLista()
  }, [])

  return (
    <Container className="tabelaUsuarios">
      <Button className="btn btn-secondary" onClick={criaLista}>
        Atualizar Lista
      </Button>
      {usuarios ? <Table usuarios={usuarios} /> : ''}
      Paginas:
      <div className="buttonPages" />
    </Container>
  )
}

export default Tabela
