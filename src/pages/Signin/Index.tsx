/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Container } from './Styled'

interface Propriedades {
  products?: string[]
}

interface StatesPage {
  user: {
    [key: string]: string
    nome: string
    login: string
    password: string
    dataInicio: string
    email: string
    telefone: string
    renda: string
    boleto: string
    painel: string
  }
}

const usuario = {
  user: {
    nome: '',
    login: '',
    password: '',
    dataInicio: '',
    email: '',
    telefone: '',
    renda: '',
    boleto: '',
    painel: ''
  }
}

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

class EnviaNovoUsuario extends React.Component<Propriedades, StatesPage> {
  constructor(props: Propriedades) {
    super(props)
    this.state = {
      ...usuario
    }
  }

  render(): JSX.Element {
    return (
      <Container>
        <Formik
          initialValues={{ ...this.state.user }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            actions.resetForm()

            axios.post('http://localhost:3001/Client', values).then(resp => {
              const div = document.querySelector('.resp')
              if (div) {
                div.innerHTML = `Cadastro Efetuado, Status: ${resp.status}`
              }
            })
          }}
        >
          {/* Callback function containing Formik state and helpers that handle common form actions */}
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              style={{ width: '1100px' }}
            >
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={values.nome}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.nome && !errors.nome}
                    isInvalid={!!errors.nome}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.nome}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    value={values.email}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Painel:</Form.Label>
                  <Form.Control
                    as="select"
                    name="painel"
                    value={values.painel}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.painel && !errors.painel}
                    isInvalid={!!errors.painel}
                  >
                    <option value="null">Escolha....</option>
                    <option value="Cliente TV">Cliente TV</option>
                    <option value="Turbo">Turbo</option>
                    <option value="Raiz">Raiz</option>
                    <option value="Wolf SSH">Wolf SSH</option>
                  </Form.Control>
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.painel}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Login:</Form.Label>
                  <Form.Control
                    type="text"
                    name="login"
                    value={values.login}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.login && !errors.login}
                    isInvalid={!!errors.login}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.login}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    value={values.password}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4">
                  <Form.Label>Telefone:</Form.Label>
                  <Form.Control
                    type="number"
                    name="telefone"
                    value={values.telefone}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.telefone && !errors.telefone}
                    isInvalid={!!errors.telefone}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.telefone}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="4">
                  <Form.Label>Data Inicio:</Form.Label>
                  <Form.Control
                    type="date"
                    name="dataInicio"
                    value={values.dataInicio}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.dataInicio && !errors.dataInicio}
                    isInvalid={!!errors.dataInicio}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.dataInicio}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2">
                  <Form.Label>Renda:</Form.Label>
                  <Form.Control
                    type="number"
                    name="renda"
                    value={values.renda}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.renda && !errors.renda}
                    isInvalid={!!errors.renda}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.renda}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Form.Label>Boleto:</Form.Label>
                  <Form.Control
                    type="number"
                    name="boleto"
                    value={values.boleto}
                    autoComplete="off"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isValid={touched.boleto && !errors.boleto}
                    isInvalid={!!errors.boleto}
                  />
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.boleto}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Button type="submit" disabled={isSubmitting}>
                  Enviar
                </Button>
                <div className="resp" />
              </Form.Row>
            </Form>
          )}
        </Formik>
      </Container>
    )
  }
}

export default EnviaNovoUsuario
