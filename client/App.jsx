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

  handleThumbClick(event) {
    const name = event.target.name;
    this.setState({
      selected: this.state.test[Number(name)]
    })
  }

  componentDidMount() {
    axios.get('/listing')
      .then(result => {
        this.setState({
          test: result.data[0].imageURLs,
          selected: result.data[0].imageURLs[0]
        })
      })
  }

  render() {
    return (
      <div>
        <div className="carousel-main">
          <SideList list={this.state.test} click={this.handleThumbClick.bind(this)} />
          <Featuredbox image={this.state.selected} />
        </div>
      </div>
    )
  }
}

export default App;