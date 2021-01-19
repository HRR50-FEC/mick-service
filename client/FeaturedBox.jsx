import React from 'react'

const Featuredbox = (props) => {
  return (
    <div className="feature-box">
      <img src={(props.image === null) ? "https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" : props.image.regular} className="featured-image" />
    </div>
  )
}

export default Featuredbox;