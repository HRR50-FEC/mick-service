import React from 'react';
import styled from 'styled-components';

const SideListItem = (props) => {

  const Thumb = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  opacity: 0.65;
  &:hover {
    opacity: 0.85;
  };
  justify-content: center;
  align-items: center;
  `

  const Selected = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  border: solid;
  border-weight: 1px;
  justify-content: center;
  align-items: center;
  `
  if (props.image === props.selected.image.thumb) {
    return (
      <div className="thumb-container" >
        <Selected
          src={props.image}
          name={props.place}
          onClick={props.click}
        />
      </div>
    )
  } else {
    return (
      <div className="thumb-container">
        <Thumb
          src={props.image}
          name={props.place}
          onClick={props.click}
        />
      </div>
    )

  }
}

export default SideListItem;