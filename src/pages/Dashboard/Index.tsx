import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Axios from 'axios'
import 'moment-timezone'
import { Content, Quadro, Online } from './Styled'

interface UsuarioDB {
  id: string
  nome: string
  login: string
  telefone: number
  email: string
  boleto: number
  painel: string
  renda: number
  dataInicio: Date
  password: string
}

const Dash = (): JSX.Element => {
  const [usuarios, setUsuarios] = useState<[UsuarioDB]>()

  useEffect(() => {
    async function busca() {
      await Axios.get('http://localhost:3001/Client').then(resp => {
        if (resp.status === 200) {
          setUsuarios(resp.data)
        }
      })
    }
    busca()
  }, [])

  const CalculoData = (date: Date) => {
    if (!date) {
      return null
    }

    const dataNow = new Date()
    const dataFim = moment(date).add({ days: 30 }).toDate()
    const dataAlerta = moment(date).add({ days: 20 }).toDate()

    if (
      moment(dataNow).isAfter(dataAlerta) &&
      moment(dataNow).isAfter(dataFim)
    ) {
      return 'expirado'
    }
    if (
      moment(dataNow).isAfter(dataAlerta) &&
      moment(dataNow).isBefore(dataFim)
    ) {
      return 'acabando'
    }
    return 'renovado'
  }

  const Clientes = () => {
    let contExpirado = 0
    let contRenovado = 0
    let contAcabando = 0
    usuarios?.forEach(user => {
      if (CalculoData(user.dataInicio) === 'expirado') {
        contExpirado += 1
      } else if (CalculoData(user.dataInicio) === 'renovado') {
        contRenovado += 1
      } else {
        contAcabando += 1
      }
    })

    const contador = {
      contExpirado,
      contRenovado,
      contAcabando
    }
    return contador
  }

  const SomaRenda = () => {
    let soma = 0
    const mes = new Date().getMonth()
    usuarios?.forEach(user => {
      if (new Date(user.dataInicio).getMonth() === mes) {
        soma += user.renda
      }
    })
    return soma
  }

  const calculaClientesPainel = (painel: string) => {
    let contExpirado = 0
    let contRenovado = 0
    let contAcabando = 0
    usuarios?.forEach(user => {
      if (user.painel === painel) {
        if (CalculoData(user.dataInicio) === 'expirado') {
          contExpirado += 1
        } else if (CalculoData(user.dataInicio) === 'renovado') {
          contRenovado += 1
        } else {
          contAcabando += 1
        }
      }
    })

    const contador = {
      contExpirado,
      contRenovado,
      contAcabando
    }
    return contador
  }

  const renderizaPainels = () => {
    return (
      <Content>
        <Quadro>
          <div>
            {usuarios ? (
              <Online>
                <div className="online" />
                <h4>WOLF DASHBORD</h4>
              </Online>
            ) : (
              <Online>
                <div className="offline" />
                <h4>WOLF DASHBORD</h4>
              </Online>
            )}
          </div>
          <div className="statusTotal">
            <div>
              <div className="expirado" />
              {Clientes().contExpirado}
            </div>
            <div>
              <div className="acabando" />
              {Clientes().contAcabando}
            </div>
            <div>
              <div className="renovado" />
              {Clientes().contRenovado}
            </div>
          </div>
        </Quadro>

        <Quadro>
          <h4> RENDA MENSAL </h4>
          <p className="valorMensal">
            R$
            {SomaRenda()}
          </p>
        </Quadro>

        <Quadro>
          <h4> CLIENTE TV</h4>
          <div className="status">
            <div>
              <div className="expirado" />
              {calculaClientesPainel('Cliente TV').contExpirado}
            </div>
            <div>
              <div className="acabando" />
              {calculaClientesPainel('Cliente TV').contAcabando}
            </div>
            <div>
              <div className="renovado" />
              {calculaClientesPainel('Cliente TV').contRenovado}
            </div>
          </div>
        </Quadro>

        <Quadro>
          <h4> TURBO </h4>
          <div className="status">
            <div>
              <div className="expirado" />
              {calculaClientesPainel('Turbo').contExpirado}
            </div>
            <div>
              <div className="acabando" />
              {calculaClientesPainel('Turbo').contAcabando}
            </div>
            <div>
              <div className="renovado" />
              {calculaClientesPainel('Turbo').contRenovado}
            </div>
          </div>
        </Quadro>

        <Quadro>
          <h4> RAIZ </h4>
          <div className="status">
            <div>
              <div className="expirado" />
              {calculaClientesPainel('Raiz').contExpirado}
            </div>
            <div>
              <div className="acabando" />
              {calculaClientesPainel('Raiz').contAcabando}
            </div>
            <div>
              <div className="renovado" />
              {calculaClientesPainel('Raiz').contRenovado}
            </div>
          </div>
        </Quadro>

        <Quadro>
          <h4> WOLF SSH</h4>
          <div className="status">
            <div>
              <div className="expirado" />
              {calculaClientesPainel('Wolf SSH').contExpirado}
            </div>
            <div>
              <div className="acabando" />
              {calculaClientesPainel('Wolf SSH').contAcabando}
            </div>
            <div>
              <div className="renovado" />
              {calculaClientesPainel('Wolf SSH').contRenovado}
            </div>
          </div>
        </Quadro>
      </Content>
    )
  }

  return <>{renderizaPainels()}</>
}

export default Dash
