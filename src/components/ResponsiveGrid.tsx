import styled from 'styled-components'

export default styled.section`
  position: relative;
  margin: 0 auto;
  width: 100%;
  /* Mobile first, then */
  /* Small devices (landscape phones, more than 768px) */
  @media (min-width: 768.98px) {
    width: 520px;
    padding: 0px 10px;
  }

  /* Medium devices (tablets, more than 1024px) */
  @media (min-width: 768.98px) {
    width: 100%;
    display: grid;
    grid-gap: 10px 5px;
    grid-template-columns: auto auto;
  }

  /* Large devices (desktops, more than 1200px) */
  @media (min-width: 1200.98px) {
    grid-gap: 15px 5px;
    grid-template-columns: auto auto auto;
  }
`
