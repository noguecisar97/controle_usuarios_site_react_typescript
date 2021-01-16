import React from 'react'
import { Button, Grid, Popup } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const botao = (
  <Button>
    <FontAwesomeIcon icon={faTrash} />
  </Button>
)

const deletar = (id: string) => {
  axios.delete(`http://localhost:3001/Client/${id}`)

  window.location.reload()
}

const botaoCancelar = (id: string) => (
  <Button color="red" content="Deletar" fluid onClick={() => deletar(id)} />
)

const PopupExampleNested = (props: { id: string }): JSX.Element => {
  const { id } = props

  return (
    <Popup wide trigger={botao} on="click">
      <Grid divided columns="equal">
        <Grid.Column>
          <Popup
            trigger={botaoCancelar(id)}
            content="Confirmar delete"
            position="top center"
            size="tiny"
            inverted
          />
        </Grid.Column>
      </Grid>
    </Popup>
  )
}

export default PopupExampleNested
