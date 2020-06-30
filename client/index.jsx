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
    const url = new URLSearchParams(window.location.search.substring(1));
    const params = url.get('id');

    axios.get('api/products/?id=' + params)
      .then(response => {
        this.setState({
          data: response.data
        })
      })
      .catch(function(error) {
        console.log('err in client get', error)
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