import React from 'react'
import styled from 'styled-components'


const Featuredbox = (props) => {

  let image;
  if (props.image === null) {
    image = "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
  } else {
    image = props.image.image.regular
  }

  const Featured = styled.div`
  padding-left: 20px;
  width: 75%;
  align-items: center;
  justify-content: center;
`
  const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  `

  const NavButton = styled.button`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  `

  return (
    <Featured>
      <img src={image} className="featured-image" />
      <ButtonBox>
        <NavButton className="left" name="previous" onClick={props.arrow}>{"<"}</NavButton>
        <NavButton className="right" name="previous" onClick={props.arrow}>{">"}</NavButton>
      </ButtonBox>
    </Featured >
  )
}

export default Featuredbox;