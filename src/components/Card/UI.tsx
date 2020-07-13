import styled from 'styled-components'

export const CardUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  margin-bottom: 15px;
  box-shadow: 0px 0px 4px 0px rgba(202, 202, 202, 1);
`
export const CardLeftUI = styled.div`
  width: 33%;
  min-width: 150px;
`
export const CardInfoUI = styled.div``
export const CardMiscUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 2px;
  & > * {
    margin-right: 6px;
  }
`
export const CardRightUI = styled.div`
  width: 66%;
`
