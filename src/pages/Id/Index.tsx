import React from 'react'
import { useParams } from 'react-router-dom'
import Alterar from '../Alterar/Index'

interface IdUser {
  id: string
}

export default function IdUser(): JSX.Element {
  const { id } = useParams<IdUser>()

  return (
    <div>
      <Alterar id={id} />
    </div>
  )
}
