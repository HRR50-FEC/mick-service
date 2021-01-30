import React from 'react';
import styled from 'styled-components';
import Featuredbox from './FeaturedBox.jsx';
import ExpandedSide from './ExpandedSide.jsx';
import ZoomBox from './ZoomBox.jsx';

const Screen = styled.div`
display: flex;
flex-direction: row;
position: fixed;
background: rgba(63, 63, 63, 0.9);
width: 100%;
height: 100%;
z-index: 3;
justify-content: center;
align-items: center;
overflow: hidden;
`


class ExpandedView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: props.image,
      test: props.test,
      arrow: props.arrow,
      clickScreen: props.screen,
      thumbclick: props.thumbclick,
      zoom: -1
    }
  }

  handleFeatureClick() {
    this.setState({
      zoom: this.state.zoom * -1
    })
  }

  render() {
    return (
      <div>
        <Screen onClick={this.state.clickScreen} name="screen" id="screen">
          <ZoomBox
            image={this.state.selected}
            arrow={this.state.arrow.bind(this)}
            expanded={true}
            click={this.handleFeatureClick.bind(this)}
            zoom={this.state.zoom}
          />
          <ExpandedSide
            list={this.state.test}
            selected={this.state.selected}
            click={this.state.thumbclick.bind(this)}
          />
        </Screen>
      </div>
    )
  }
}

// const ExpandedView = (props) => {
//   return (
//     <Screen>
//       <Featuredbox
//         image={props.image}
//         arrow={props.arrow}
//       />
//     </Screen>
//   )
// }

export default ExpandedView;