import React from 'react';
import faker from 'faker';
import axios from 'axios';
import SideList from './SideList.jsx'
import Featuredbox from './Featuredbox.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: [],
      selected: null
    }
  }

  handleArrowClick() {
    let operator;
    if (event.target.name === 'previous') {
      if (this.state.selected.place === 0) {
        operator = this.state.test.length - 1
      } else {
        operator = -1
      }
    } else {
      if (this.state.selected.place === this.state.test.length - 1) {
        operator = (this.state.selected.place) * -1
      } else {
        operator = 1
      }
    }
    this.setState({
      selected: { place: this.state.selected.place + operator, image: this.state.test[this.state.selected.place + operator] }
    })

  }

  handleThumbClick(event) {
    const name = event.target.name;
    this.setState({
      selected: { place: Number(name), image: this.state.test[Number(name)] }
    })
  }

  componentDidMount() {
    axios.get('/listing')
      .then(result => {
        this.setState({
          test: result.data[0].imageURLs,
          selected: { place: 0, image: result.data[0].imageURLs[0] }
        })
      })
  }

  render() {
    return (
      <div>
        <div className="carousel-main">
          <SideList list={this.state.test} click={this.handleThumbClick.bind(this)} />
          <Featuredbox image={this.state.selected} arrow={this.handleArrowClick.bind(this)} />
        </div>
      </div>
    )
  }
}

export default App;