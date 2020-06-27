import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Carousel from './components/Carousel.jsx'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3000/api/bought')
    .then((response) => {
      console.log(response.data);
      this.setState ({
        data: response.data,
      })
    })
  }
  render() {
    return (
      <div>
        <div>
          <Carousel data={this.state.data}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('App'));