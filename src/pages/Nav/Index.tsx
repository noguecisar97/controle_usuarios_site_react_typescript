import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Navegador } from './Styled'

import Signin from '../Signin/Index'
import Dashboard from '../Dashboard/Index'
import Tabela from '../Tabela/Index'

import Alterar from '../Id/Index'

const Nav = (): JSX.Element => {
  return (
    <>
      <Navegador>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/signin">Cadastro</Link>
          </li>
          <li>
            <Link to="/users">Usuarios</Link>
          </li>
        </ul>
      </Navegador>

      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/users">
          <Tabela />
        </Route>
        <Route path="/:id/alterar">
          <Alterar />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  )
}

export default Nav
