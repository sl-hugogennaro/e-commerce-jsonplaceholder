import React from 'react'

import { CardUI, CardLeftUI, CardInfoUI, CardMiscUI, CardRightUI } from './UI'
import { connector, PropsFromRedux } from './Brain'

type CardProps = PropsFromRedux & {
  id: number
  title: string
  thumbnail: string
  url: string
}
const Card = ({ id, title, thumbnail, addToCart }: CardProps) => {
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
          <button onClick={() => addToCart(id)}>Add to cart</button>
        </CardMiscUI>
      </CardRightUI>
    </CardUI>
  )
}

export default connector(Card)
