import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Card } from './Card'
import { DataType } from './App'

const CardsContainerUI = styled.section`
  height: 80%;
`

type CardsContainerProps = {
  data: DataType[]
}
const pageLen = 15
export const CardsContainer = ({ data }: CardsContainerProps) => {
  const [page, setPage] = useState(1)
  const [cards, setCards] = useState([])

  useEffect(() => {
    if (page === 1) {
      setCards(data.slice(0, pageLen))
    } else {
      setCards(data.slice(page * pageLen, pageLen))
    }
  }, [data, page])

  return (
    <CardsContainerUI>
      {cards.map(({ id, title, thumbnailUrl, url }) => (
        <Card key={id} {...{ id, title, thumbnail: thumbnailUrl, url }} />
      ))}
    </CardsContainerUI>
  )
}
