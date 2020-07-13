import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader'

import { Card } from './Card'

const CardsContainerUI = styled.section``

type CardsContainerProps = {
  data: any[]
}
export const CardsContainer = ({ data }: CardsContainerProps) => {
  return (
    <CardsContainerUI>
      {data.length > 0 ? (
        data.map(({ id, title, thumbnailUrl, url }) => (
          <Card key={id} {...{ id, title, thumbnail: thumbnailUrl, url }} />
        ))
      ) : (
        <Loader />
      )}
    </CardsContainerUI>
  )
}
