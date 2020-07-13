import React from 'react'
import styled from 'styled-components'

const CardUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
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

export const Card = () => (
  <CardUI>
    <CardLeftUI>
      <img src="" alt="" />
    </CardLeftUI>
    <CardRightUI>
      <CardInfoUI>
        <h3>Card Title</h3>
      </CardInfoUI>
      <CardMiscUI>
        <div>Price ?</div>
        <button>Add to cart</button>
      </CardMiscUI>
    </CardRightUI>
  </CardUI>
)
