/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import Moment from 'react-moment'
import Popup from '../../Popup/Index'

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

interface P {
  usuarios?: [UsuarioDB]
}

const inicial = {
  id: '',
  nome: '',
  login: '',
  telefone: '',
  email: '',
  boleto: '',
  painel: '',
  renda: '',
  dataInicio: '',
  password: ''
}

class Tabela extends React.Component<P, UsuarioDB> {
  constructor(props: P) {
    super(props)
    this.state = { ...inicial }
  }

  render(): JSX.Element {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Login</th>
            <th>Email</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.props.usuarios?.map(usuario => {
            return (
              <tr key={usuario.id}>
                <td>{usuario.nome}</td>
                <td>{usuario.login}</td>
                <td>{usuario.email}</td>
                <td>
                  <Moment date={usuario.dataInicio} format="DD/MM/YYYY" />
                </td>
                <td>
                  <Link to={`${usuario.id}/alterar`}>
                    <Button>
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </Button>
                  </Link>
                  <Popup id={usuario.id} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    )
  }
}

export default Tabela
