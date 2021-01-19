import React from 'react'
import SideListItem from './SideListItem.jsx'

const SideList = (props) => {
  return (
    <div>
      {props.list.map((image, i) =>
        <SideListItem image={image.thumb} place={i} key={i} click={props.click} />
      )}
    </div>
  )
}

export default SideList;
