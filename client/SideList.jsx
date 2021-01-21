import React from 'react'
import SideListItem from './SideListItem.jsx'

const SideList = (props) => {
  return (
    <div className="side-list">
      {props.list.map((image, i) =>
        <SideListItem image={image.thumb} place={i} key={i} click={props.click} selected={props.selected} />
      )}
    </div>
  )
}

export default SideList;
