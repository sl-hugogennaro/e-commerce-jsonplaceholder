import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Card from './Card'
import ResponsiveGrid from './ResponsiveGrid'
import { DataType } from '../redux/models/engine/types'

const ContainerNavUI = styled.nav`
  width: 100%;
  min-height: 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
`
const QuickAccessUI = styled.button`
  background: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &.disabled {
    color: gray;
    &:hover {
      cursor: initial;
    }
    &:focus {
      outline: none;
    }
  }
`

type CardsContainerProps = {
  data: DataType[]
}
const pageLen = 15
export const CardsContainer = ({ data }: CardsContainerProps) => {
  const [page, setPage] = useState(1)
  const [cards, setCards] = useState([])
  const maxPage = useRef(data.length / pageLen)

  const handleClick = (newPage: number) => {
    if (newPage >= 1 && newPage <= maxPage.current) {
      setPage(newPage)
    }
  }

  useEffect(() => {
    maxPage.current = data.length / pageLen
  }, [data])

  useEffect(() => {
    const start = (page - 1) * pageLen
    setCards(data.slice(start, start + pageLen))
  }, [data, page])

  return (
    <ResponsiveGrid>
      {cards.map(({ id, title, thumbnailUrl, url }) => (
        <Card key={id} {...{ id, title, thumbnail: thumbnailUrl, url }} />
      ))}
      <ContainerNavUI>
        <QuickAccessUI className={page > 1 ? '' : 'disabled'} onClick={() => handleClick(1)}>
          {'<<'}
        </QuickAccessUI>
        <QuickAccessUI className={page > 1 ? '' : 'disabled'} onClick={() => handleClick(page - 1)}>
          {'<'}
        </QuickAccessUI>
        <div onClick={() => handleClick(1)}>...</div>
        <QuickAccessUI className={page < maxPage.current ? '' : 'disabled'} onClick={() => handleClick(page + 1)}>
          {'>'}
        </QuickAccessUI>
        <QuickAccessUI
          className={page < maxPage.current ? '' : 'disabled'}
          onClick={() => handleClick(maxPage.current)}
        >
          {'>>'}
        </QuickAccessUI>
      </ContainerNavUI>
    </ResponsiveGrid>
  )
}
