import React from 'react';
import faker from 'faker'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      test: faker.image.image()
    }
  }

  render() {
    return (
      <div>
        <div>
          HELLLOOOOOO
        </div>
      </div>
    )
  }
}

export default App;