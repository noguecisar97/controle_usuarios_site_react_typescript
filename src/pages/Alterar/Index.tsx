/* eslint-disable react/destructuring-assignment */
import axios from 'axios'
import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import * as Yup from 'yup'
import { Container } from './Styled'

interface S {
  [key: string]: string
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
  usuarios?: S
  id?: string
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

export default class AlteraUsuario extends Component<P, S> {
  constructor(props: P) {
    super(props)
    this.state = { ...inicial }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(): void {
    axios
      .get(`http://localhost:3001/Client/${this.props.id}`)
      .then(resp => this.setState(resp.data))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err))
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const nome = event.target.name
    const valor = event.target.value
    const user = { ...this.state }
    user[nome] = valor
    this.setState({ ...user })
  }

  async handleSubmit(event: React.MouseEvent<HTMLElement>): Promise<void> {
    event.preventDefault()
    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

    const validationSchema = Yup.object().shape({
      nome: Yup.string()
        .min(2, 'Nome tem que ser maior que 2 caracteres')
        .max(100, 'Nome não pode ter mais que 100 caracteres')
        .required('Nome é necessário'),
      login: Yup.string()
        .min(2, 'Login tem que ser maior que 2 caracteres')
        .max(50, 'Login não pode ter mais que 50 caracteres')
        .required('Login é necessário'),
      password: Yup.string().required('Password é necessário'),
      dataInicio: Yup.date().required('Data é necessário'),
      email: Yup.string()
        .email('Entre com um Email valido')
        .max(100, 'Email não pode ter mais que 100 caracteres')
        .required('Email é necessário'),
      telefone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone number required')
        .required('Telefone é necessário'),
      renda: Yup.number().required('Renda é necessário'),
      boleto: Yup.number().required('Boleto é necessário'),
      painel: Yup.string().required('Painel é necessário')
    })

    await validationSchema.validate(this.state, {
      abortEarly: false
    })
    // Validation passed
    await axios.put(`http://localhost:3001/Client/${this.state.id}`, this.state)

    window.location.href = 'http://localhost:3000/users'
  }

  render(): JSX.Element {
    return (
      <Container>
        <h3>
          Alterando Usuario ID-
          {this.state.id}
        </h3>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={this.state.nome}
                name="nome"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="text"
                value={this.state.login}
                name="login"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="text"
                value={this.state.password}
                name="password"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={this.state.email}
                name="email"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="number"
                value={this.state.telefone}
                name="telefone"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Boleto</Form.Label>
              <Form.Control
                type="number"
                value={this.state.boleto}
                name="boleto"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Painel</Form.Label>
              <Form.Control
                as="select"
                name="painel"
                required
                value={this.state.painel}
                autoComplete="off"
                onChange={this.handleChange}
              >
                <option value="null">Escolha....</option>
                <option value="Cliente TV">Cliente TV</option>
                <option value="Turbo">Turbo</option>
                <option value="Raiz">Raiz</option>
                <option value="Wolf SSH">Wolf SSH</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Renda</Form.Label>
              <Form.Control
                type="number"
                value={this.state.renda}
                name="renda"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="12">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                value={this.state.dataInicio}
                name="dataInicio"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Button type="submit" onClick={e => this.handleSubmit(e)}>
              Alterar
            </Button>
          </Form.Row>
        </Form>
      </Container>
    )
  }
}
