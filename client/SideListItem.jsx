import React from 'react'

const SideListItem = (props) => {
  return (
    <div>
      <img src={props.image} className="side-list-item" name={props.place} onClick={props.click} />
    </div>
  )
}

export default SideListItem;