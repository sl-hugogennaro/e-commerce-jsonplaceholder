import React from 'react'
import styled from 'styled-components'

const CardUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 15px;
  box-shadow: 0px 0px 4px 0px rgba(202, 202, 202, 1);
`
const CardLeftUI = styled.div`
  width: 33%;
`
const CardInfoUI = styled.div``
const CardMiscUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 2px;
  & > * {
    margin-right: 6px;
  }
`
const CardRightUI = styled.div`
  width: 66%;
`
type CardProps = {
  id: number
  title: string
  thumbnail: string
  url: string
}
export const Card = ({ title, thumbnail }: CardProps) => {
  return (
    <CardUI>
      <CardLeftUI>
        <img src={thumbnail} alt="Card thumbnail" />
      </CardLeftUI>
      <CardRightUI>
        <CardInfoUI>
          <h3>{title}</h3>
        </CardInfoUI>
        <CardMiscUI>
          <div>Some price €</div>
          <button>Add to cart</button>
        </CardMiscUI>
      </CardRightUI>
    </CardUI>
  )
}
