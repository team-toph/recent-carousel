import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div> Recently Viewed Items </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'));